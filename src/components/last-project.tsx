import { motion } from 'motion/react';

export default function LastProject() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(4px)' }}
      whileInView={{ opacity: 0.5, filter: 'blur(0px)' }}
      transition={{ delay: 1.75, duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='flex w-full flex-col items-center justify-center bg-primary px-3 py-1 text-center text-primary-foreground opacity-50 sm:flex-row sm:gap-1'
    >
      Conocé mi último gran proyecto.{' '}
      <a
        href='https://pulvesys.com'
        target='_blank'
        className='font-semibold underline hover:text-white dark:hover:text-black'
      >
        ¡PulveSys ya disponible!
      </a>
    </motion.div>
  );
}
