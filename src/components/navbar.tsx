import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Label } from '@/components/ui/label';
import { Link } from 'react-scroll';
import { ROUTES } from '@/const/routes';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import logoForDark from '@/assets/logo/logo-light.png';
import logoForLight from '@/assets/logo/logo-dark.png';
import { motion } from 'motion/react';
import { useLang } from '@/hooks/use-lang';
import { useSearchParams } from 'react-router-dom';
import { useTheme } from '@/hooks/use-theme';
import { useWidth } from '@/hooks/use-width';

export default function Navbar() {
  const [navHeight, setNavHeight] = useState(0);
  const { scrolled, handleScroll } = useWidth();

  const [searchParams, setSearchParams] = useSearchParams();
  const { LANG, isEng } = useLang();

  const { theme, handleChangeTheme } = useTheme();

  const handleLanguage = () => {
    const lang = searchParams.get('lang');

    if (lang) searchParams.delete('lang');
    else searchParams.set('lang', 'en');

    setSearchParams(searchParams);
  };

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setNavHeight(nav.offsetHeight);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logo = theme === 'dark' ? logoForDark : logoForLight;

  return (
    <header
      id='navbar'
      className={cn(
        'sticky top-0 z-50 w-full px-4 py-4 text-primary',
        !scrolled
          ? 'bg-primary-foreground'
          : 'bg-primary-foreground/90 backdrop-blur-sm',
      )}
    >
      <nav className='flex w-full items-center justify-center gap-12 md:gap-24'>
        <Link
          to='#home'
          smooth
          duration={500}
          offset={-60}
          className='cursor-pointer'
        >
          <motion.img
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            whileInView={{ opacity: 100, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            src={logo}
            alt='Logo de gianlucabredice.dev'
            className='size-12 object-contain md:size-16'
          />
        </Link>
        <ul className='flex items-center justify-center gap-4'>
          {ROUTES.map((route, index) => (
            <motion.li
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              whileInView={{ opacity: 100, filter: 'blur(0px)' }}
              transition={{
                delay: 0.25 + (index + 1) * 0.1,
                duration: 0.5,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              key={route.id}
              className={cn(
                'text-sm sm:text-base',
                index === 2 && 'hidden sm:block',
              )}
            >
              <Link
                to={`#${route.id}`}
                smooth
                duration={500}
                offset={-navHeight}
                className='cursor-pointer border-b-[1px] border-transparent ease-in-out hover:border-b-primary'
              >
                {route.id === 'options' ? (
                  <>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <DotsHorizontalIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className='mr-4 mt-4 flex w-fit flex-col items-end'>
                        <DropdownMenuLabel>
                          {LANG.NAVBAR.OPTIONS}
                        </DropdownMenuLabel>
                        <DropdownMenuGroup className='flex w-full flex-col items-end gap-2 p-2'>
                          <div className='flex w-full items-center justify-between gap-4'>
                            <Switch
                              id='english-mode'
                              onClick={handleLanguage}
                              defaultChecked={
                                searchParams.get('lang') ? true : false
                              }
                            />
                            <Label htmlFor='english-mode'>
                              {LANG.NAVBAR.ENG_MODE}
                            </Label>
                          </div>
                          <div className='flex w-full items-center justify-between gap-4'>
                            <Switch
                              id='dark-mode'
                              onClick={handleChangeTheme}
                              defaultChecked={theme === 'dark' ? true : false}
                            />
                            <Label htmlFor='dark-mode'>
                              {LANG.NAVBAR.DARK_MODE}
                            </Label>
                          </div>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : !isEng ? (
                  route.name
                ) : (
                  route.name_eng
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
