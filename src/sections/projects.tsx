import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TGalleryImage, TProject } from '@/types/projects.types';
import { Title, TitleLetter } from '@/components/ui/title';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/const/projects';
import { ProjectGallery } from '@/components/carousel';
import { motion } from 'motion/react';
import { useLang } from '@/hooks/use-lang';

export default function Projects() {
  const [active, setActive] = useState<TProject>(
    PROJECTS.sort((a, b) => b.date.getTime() - a.date.getTime())[0],
  );

  const [height, setHeight] = useState(100);

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setHeight(nav.offsetHeight);
  }, []);

  const { LANG, isEng } = useLang();

  return (
    <section
      id='#projects'
      className='relative flex flex-col items-center gap-8 text-primary md:items-start'
      style={{
        minHeight: `${100 - (100 - height)}vh`,
      }}
    >
      <div className='flex flex-col items-center gap-4 px-8 pt-8 text-center md:items-start md:text-start'>
        <Title>
          {LANG.PROJECTS.TITLE.split('').map((l, idx) => (
            <TitleLetter
              key={`projects_animated_title_${l}_${idx}`}
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
          {LANG.PROJECTS.SUBTITLE}
        </motion.span>
        <motion.small
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          whileInView={{ opacity: 100, filter: 'blur(0px)' }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='mt-4 opacity-75'
        >
          {LANG.PROJECTS.TOOLTIP}
        </motion.small>
        <ul className='flex flex-wrap justify-center gap-4 md:justify-start'>
          {PROJECTS.sort((a, b) => {
            return b.date.getTime() - a.date.getTime();
          }).map((project, idx) => (
            <motion.li
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              whileInView={{ opacity: 100, filter: 'blur(0px)' }}
              transition={{
                delay: 0.75 + (idx + 1) * 0.1,
                duration: 0.5,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              key={project.name + '_key'}
            >
              <Button
                size='sm'
                variant={active === project ? 'default' : 'outline'}
                onClick={() => setActive(project)}
                className='min-w-32'
              >
                {project.name}
              </Button>
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          whileInView={{ opacity: 100, filter: 'blur(0px)' }}
          transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Card className='mt-4'>
            <CardHeader className='flex flex-col gap-4'>
              <CardTitle className='flex w-full items-center justify-between gap-4'>
                <span>{active?.name}</span>
                <a href={active.url} target='_blank'>
                  <Button variant='outline' className='font-medium'>
                    {!isEng ? 'Ir al despligue' : 'Go to deploy'}
                  </Button>
                </a>
              </CardTitle>
              <CardDescription>
                <p className='flex flex-wrap gap-1'>
                  {!isEng ? active?.description_es : active?.description}
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col items-center md:items-end'>
              <span className='text-end text-sm font-medium opacity-75'>
                {active.date.toLocaleDateString()}
              </span>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, filter: 'blur(4px)' }}
        whileInView={{ opacity: 100, filter: 'blur(0px)' }}
        transition={{ delay: 1.25, duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {PROJECTS?.map((project) => (
          <ProjectGallery
            key={project.name + '_gallery_key'}
            active={active === project}
            gallery={project.gallery as TGalleryImage[]}
          />
        ))}
      </motion.div>
    </section>
  );
}
