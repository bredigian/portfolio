import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SOCIAL } from '@/const/social';
import TitleSlider from '@/components/title-slider';
import me1 from '@/assets/me-1.jpg';
import { motion } from 'motion/react';
import { useLang } from '@/hooks/use-lang';

export default function Home() {
  const [height, setHeight] = useState(100);

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setHeight(nav.offsetHeight);
  }, []);

  const { LANG, isEng } = useLang();

  return (
    <section
      id='#home'
      className='flex flex-col items-center justify-center gap-5 p-8 text-primary md:flex-row'
      style={{
        minHeight: `${100 - (100 - height)}vh`,
      }}
    >
      <div className='flex flex-col items-center gap-4 text-center md:items-start md:text-start'>
        <motion.span
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          whileInView={{ opacity: 100, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='text-2xl opacity-75 lg:text-3xl'
        >
          {LANG.HOME.TITLE}
        </motion.span>
        <TitleSlider />
        <motion.span
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          whileInView={{ opacity: 100, filter: 'blur(0px)' }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='text-lg opacity-75 lg:text-xl'
        >
          {LANG.HOME.SUBTITLE[0]}
          <b>{LANG.HOME.SUBTITLE[1]}</b>
          {LANG.HOME.SUBTITLE[2]}
        </motion.span>
        <motion.p
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          whileInView={{ opacity: 100, filter: 'blur(0px)' }}
          transition={{ delay: 0.75, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='opacity-75 lg:text-lg'
        >
          {LANG.HOME.DESCRIPTION}
        </motion.p>
        <ul className='my-6 flex w-full flex-wrap justify-center gap-4 md:justify-start'>
          {SOCIAL.map((social, idx) => (
            <motion.li
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              whileInView={{ opacity: 100, filter: 'blur(0px)' }}
              transition={{
                delay: 1 + (idx + 1) * 0.1,
                duration: 0.5,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              key={social.name + '_key'}
            >
              <Link
                to={!isEng ? social.url_es ?? social.url : social.url}
                target='_blank'
              >
                <Button variant='outline' size='sm' className='flex gap-2'>
                  <social.icon size={20} />
                  <span>
                    {!isEng ? social.name_es ?? social.name : social.name}
                  </span>
                </Button>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.img
        initial={{ opacity: 0, filter: 'blur(4px)' }}
        whileInView={{ opacity: 100, filter: 'blur(0px)' }}
        transition={{ delay: 1.25, duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        src={me1}
        alt='Gianluca Bredice Vivarelli'
        className='h-72 w-full max-w-80 grow rounded-2xl object-cover md:h-[550px] lg:max-w-96'
      />
    </section>
  );
}
