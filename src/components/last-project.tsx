export default function LastProject() {
  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-1 bg-primary px-3 py-1 text-center text-primary-foreground opacity-50'>
      Conocé mi último gran proyecto.{' '}
      <a
        href='https://pulvesys.com'
        target='_blank'
        className='font-semibold underline hover:text-white dark:hover:text-black'
      >
        ¡PulveSys ya disponible!
      </a>
    </div>
  );
}
