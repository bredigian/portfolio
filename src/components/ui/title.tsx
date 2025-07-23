import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Title({ children, className }: Props) {
  return (
    <motion.h1
      initial={{ opacity: 0, filter: 'blur(4px)' }}
      whileInView={{ opacity: 100, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className ?? '',
      )}
    >
      {children}
    </motion.h1>
  );
}

export function TitleLetter({ children, delay }: Props) {
  return (
    <motion.span
      initial={{ y: 10, opacity: 0, filter: 'blur(4px)' }}
      whileInView={{ y: 0, opacity: 100, filter: 'blur(0px)' }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.span>
  );
}
