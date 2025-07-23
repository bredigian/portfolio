import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Title, TitleLetter } from '@/components/ui/title';
import { useEffect, useState } from 'react';

import { Masonry } from '@/components/masonry';
import { ReloadIcon } from '@radix-ui/react-icons';
import { SKILLS } from '@/const/skills';
import { motion } from 'motion/react';
import { useLang } from '@/hooks/use-lang';

export default function Skills() {
  const SKILLS_GROUPED = SKILLS.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof SKILLS>,
  );

  const [height, setHeight] = useState(100);

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setHeight(nav.offsetHeight);
  }, []);

  const { LANG, isEng } = useLang();

  return (
    <section
      id='#skills'
      className='flex flex-col items-center gap-8 p-8 text-primary md:items-end'
      style={{
        minHeight: `${100 - (100 - height)}vh`,
      }}
    >
      <div className='flex flex-col items-center gap-4 text-center md:items-end md:text-end'>
        <Title>
          {LANG.SKILLS.TITLE.split('').map((l, idx) => (
            <TitleLetter
              key={`animated_skills_title_${l}_${idx}`}
              delay={(idx + 1) * 0.05}
            >
              {l}
            </TitleLetter>
          ))}
        </Title>
        <motion.span
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          whileInView={{ opacity: 100, filter: 'blur(0px)' }}
          transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='opacity-75'
        >
          {LANG.SKILLS.SUBTITLE}
        </motion.span>
      </div>
      <Masonry
        items={Object.entries(SKILLS_GROUPED)}
        config={{
          columns: [1, 1, 2, 2],
          gap: [16, 16, 24, 24],
          media: [640, 768, 1024],
        }}
        render={([category, skills], idx) => (
          <motion.div
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            whileInView={{ opacity: 100, filter: 'blur(0px)' }}
            transition={{
              delay: 0.5 + (idx + 1) * 0.1,
              duration: 0.5,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
          >
            <Card key={category}>
              <CardHeader>
                <CardTitle>
                  {isEng
                    ? category
                    : skills.find((s) => s.category === category)?.category_es}
                </CardTitle>
                <CardDescription hidden></CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='grid grid-cols-3 gap-4 md:grid-cols-4'>
                  {skills.map((skill, idx) => (
                    <motion.li
                      initial={{ opacity: 0, filter: 'blur(4px)' }}
                      whileInView={{ opacity: 100, filter: 'blur(0px)' }}
                      transition={{
                        delay: 0.75 + (idx + 1) * 0.1,
                        duration: 0.5,
                        ease: 'easeOut',
                      }}
                      viewport={{ once: true }}
                      key={skill.name + '_key'}
                      className='col-span-1 flex h-20 flex-col items-center justify-center gap-2'
                    >
                      <skill.icon size={50} />
                      <small className='overflow-hidden text-ellipsis text-nowrap'>
                        {skill.name}
                      </small>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}
        placeholder={
          <div>
            <ReloadIcon className='size-4 animate-spin' />
          </div>
        }
      />
    </section>
  );
}
