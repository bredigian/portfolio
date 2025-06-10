import ContactForm from '@/components/contact-form';
import { DateTime } from 'luxon';
import logoForDark from '@/assets/logo/logo-light.png';
import logoForLight from '@/assets/logo/logo-dark.png';

export default function Footer() {
  const now = DateTime.now();

  return (
    <footer
      id='#me'
      className='flex w-full flex-col gap-24 rounded-t-xl bg-white p-8 shadow-lg dark:bg-black'
    >
      <div className='flex w-full items-center justify-around gap-4'>
        <div className='flex max-w-xl flex-col items-center gap-4 text-center md:items-start md:text-start'>
          <h2 className='flex flex-col text-4xl font-thin md:text-[42px] md:leading-tight'>
            ¿Querés saber más sobre mí?
            <a href='https://instagram.com/gianlucabredice.dev' target='_blank'>
              <span className='font-extrabold underline'>
                ¡Seguime en Instagram!
              </span>
            </a>
          </h2>
          <p className='text-base opacity-75 md:text-lg'>
            En mi perfíl subo contenido relacionado a los proyectos y trabajos
            que realizo, mostrando demos y comentando en primera persona todo
            acerca de ellos.
          </p>
        </div>
        <img
          src={logoForDark}
          alt='Logo de gianlucabredice.dev'
          className='hidden size-0 object-contain dark:block md:size-36 xl:size-60'
        />
        <img
          src={logoForLight}
          alt='Logo de gianlucabredice.dev'
          className='block size-0 object-contain dark:hidden md:size-36 xl:size-60'
        />
      </div>
      <div className='flex flex-col items-start justify-around gap-8 self-center md:flex-row md:self-auto'>
        <h4 className='max-w-sm text-xl font-extralight opacity-75 md:text-3xl'>
          También podés contactarme a través del siguiente formulario
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
