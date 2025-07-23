import ContactForm from '@/components/contact-form';
import { DateTime } from 'luxon';
import logoForDark from '@/assets/logo/logo-light.png';
import logoForLight from '@/assets/logo/logo-dark.png';
import { useLang } from '@/hooks/use-lang';

export default function Footer() {
  const now = DateTime.now();

  const { LANG } = useLang();

  return (
    <footer
      id='#me'
      className='flex w-full flex-col gap-24 rounded-t-xl bg-white p-8 shadow-lg dark:bg-black'
    >
      <div className='flex w-full items-center justify-around gap-4'>
        <div className='flex max-w-xl flex-col items-center gap-4 text-center md:items-start md:text-start'>
          <h2 className='flex flex-col text-4xl font-thin md:text-[42px] md:leading-tight'>
            {LANG.FOOTER.SUBTITLE}
            <a href='https://instagram.com/gianlucabredice.dev' target='_blank'>
              <span className='font-extrabold underline'>
                {LANG.FOOTER.TITLE}
              </span>
            </a>
          </h2>
          <p className='text-base opacity-75 md:text-lg'>
            {LANG.FOOTER.DESCRIPTION}
          </p>
        </div>
        <img
          src={logoForDark}
          alt='Logo de gianlucabredice.dev'
          className='hidden object-contain md:size-36 md:dark:block xl:size-60'
        />
        <img
          src={logoForLight}
          alt='Logo de gianlucabredice.dev'
          className='hidden object-contain md:block md:size-36 md:dark:hidden xl:size-60'
        />
      </div>
      <div className='flex flex-col items-start justify-around gap-8 self-center md:flex-row md:self-auto'>
        <h4 className='max-w-sm text-xl font-extralight opacity-75 md:text-3xl'>
          {LANG.FOOTER.CONTACT_FORM_TITLE}
        </h4>
        <ContactForm />
      </div>
      <div className='flex items-center justify-center gap-8 text-primary opacity-75'>
        <img
          src={logoForDark}
          alt='Logo de gianlucabredice.dev'
          className='hidden size-14 object-contain dark:block'
        />
        <img
          src={logoForLight}
          alt='Logo de gianlucabredice.dev'
          className='block size-14 object-contain dark:hidden'
        />
        <span className='text-xs md:text-sm'>
          © {now.year.toString()} Gianluca Bredice Developer.
        </span>
      </div>
    </footer>
  );
}
