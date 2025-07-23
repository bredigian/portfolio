import ContactForm from '@/components/contact-form';
import { DateTime } from 'luxon';
import logoForDark from '@/assets/logo/logo-light.png';
import logoForLight from '@/assets/logo/logo-dark.png';
import { motion } from 'motion/react';
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
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            whileInView={{ opacity: 100, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='flex flex-col text-4xl font-thin md:text-[42px] md:leading-tight'
          >
            <span>
              {LANG.FOOTER.SUBTITLE.split('').map((l, idx) => (
                <motion.span
                  key={`animated_footer_subtitle_${l}_${idx}`}
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 100, filter: 'blur(0px)' }}
                  transition={{
                    delay: (idx + 1) * 0.025,
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                >
                  {l}
                </motion.span>
              ))}
            </span>
            <a href='https://instagram.com/gianlucabredice.dev' target='_blank'>
              {LANG.FOOTER.TITLE.split('').map((l, idx) => (
                <motion.span
                  key={`animated_footer_title_${l}_${idx}`}
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 100, filter: 'blur(0px)' }}
                  transition={{
                    delay: 0.25 + (idx + 1) * 0.025,
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                  className='font-extrabold'
                >
                  {l}
                </motion.span>
              ))}
            </a>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            whileInView={{ opacity: 100, filter: 'blur(0px)' }}
            transition={{ delay: 0.75, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='text-base opacity-75 md:text-lg'
          >
            {LANG.FOOTER.DESCRIPTION}
          </motion.p>
        </div>
        <motion.img
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          whileInView={{ opacity: 100, filter: 'blur(0px)' }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          src={logoForDark}
          alt='Logo de gianlucabredice.dev'
          className='hidden object-contain md:size-36 md:dark:block xl:size-60'
        />
        <motion.img
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          whileInView={{ opacity: 100, filter: 'blur(0px)' }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          src={logoForLight}
          alt='Logo de gianlucabredice.dev'
          className='hidden object-contain md:block md:size-36 md:dark:hidden xl:size-60'
        />
      </div>
      <div className='flex flex-col items-start justify-around gap-8 self-center md:flex-row md:self-auto'>
        <motion.h4
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          whileInView={{ opacity: 100, filter: 'blur(0px)' }}
          transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='max-w-sm text-xl font-extralight opacity-75 md:text-3xl'
        >
          {LANG.FOOTER.CONTACT_FORM_TITLE}
        </motion.h4>
        <ContactForm />
      </div>
      <motion.div
        initial={{ opacity: 0, filter: 'blur(4px)' }}
        whileInView={{ opacity: 100, filter: 'blur(0px)' }}
        transition={{ delay: 1.5, duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='flex items-center justify-center gap-8 text-primary opacity-75'
      >
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
      </motion.div>
    </footer>
  );
}
