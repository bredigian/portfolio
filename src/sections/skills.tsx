import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useEffect, useState } from 'react';

import { Masonry } from '@/components/masonry';
import { ReloadIcon } from '@radix-ui/react-icons';
import { SKILLS } from '@/const/skills';
import { Title } from '@/components/ui/title';
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

  const { LANG } = useLang();

  return (
    <section
      id='#skills'
      className='flex flex-col items-center gap-4 p-8 text-primary md:items-end'
      style={{
        minHeight: `${100 - (100 - height)}vh`,
      }}
    >
      <div className='flex flex-col items-center gap-4 text-center md:items-end md:text-end'>
        <Title>{LANG.SKILLS.TITLE}</Title>
        <span className='opacity-75 lg:text-lg'>{LANG.SKILLS.SUBTITLE}</span>
      </div>
      <Masonry
        items={Object.entries(SKILLS_GROUPED)}
        config={{
          columns: [1, 1, 2, 2],
          gap: [16, 16, 24, 24],
          media: [640, 768, 1024],
        }}
        render={([category, skills]) => (
          <Card key={category} className='h-full'>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
              <CardDescription hidden></CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='grid grid-cols-3 gap-4 md:grid-cols-4'>
                {skills.map((skill) => (
                  <li
                    key={skill.name + '_key'}
                    className='col-span-1 flex h-20 flex-col items-center justify-center gap-2'
                  >
                    <skill.icon size={50} />
                    <small className='overflow-hidden text-ellipsis text-nowrap'>
                      {skill.name}
                    </small>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
        placeholder={
          <div>
            <ReloadIcon className='size-4- animate-spin' />
          </div>
        }
      />
    </section>
  );
}
