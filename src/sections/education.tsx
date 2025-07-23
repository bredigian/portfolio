import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Title, TitleLetter } from '@/components/ui/title';
import { useEffect, useState } from 'react';

import { DateTime } from 'luxon';
import { EDUCATION } from '@/const/education';
import { motion } from 'motion/react';
import { useLang } from '@/hooks/use-lang';

export default function Education() {
  const [height, setHeight] = useState(100);
  const { LANG, isEng } = useLang();

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setHeight(nav.offsetHeight);
  }, []);

  return (
    <section
      id='#education'
      className='flex flex-col items-center gap-8 p-8 text-primary md:w-full md:items-start'
      style={{
        minHeight: `${100 - (100 - height)}vh`,
      }}
    >
      <div className='flex flex-col items-center gap-4 text-center md:items-start md:text-start'>
        <Title>
          {LANG.EDUCATION.TITLE.split('').map((l, idx) => (
            <TitleLetter
              key={`animated_education_title_${l}_${idx}`}
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
          {LANG.EDUCATION.SUBTITLE}
        </motion.span>
      </div>
      <ul className='grid w-full grid-cols-8 gap-4'>
        {EDUCATION.sort(
          (a, b) => (b.endDate?.getTime() as number) - a.endDate?.getTime(),
        ).map((item, idx) => {
          const startDate = DateTime.fromJSDate(item?.startDate);
          const endDate = DateTime.fromJSDate(item?.endDate);
          const today = DateTime.now();

          const isHappening =
            today.toLocaleString(DateTime.DATE_SHORT, { locale: 'es-AR' }) ===
            endDate.toLocaleString(DateTime.DATE_SHORT, { locale: 'es-AR' });

          return (
            <motion.li
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              whileInView={{ opacity: 100, filter: 'blur(0px)' }}
              transition={{
                delay: 0.5 + (idx + 1) * 0.1,
                duration: 0.5,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              key={item.title}
              className='col-span-full md:col-span-4 md:[&:nth-child(1)]:col-span-3 md:[&:nth-child(2)]:col-span-5  md:[&:nth-child(3)]:col-span-6 md:[&:nth-child(4)]:col-span-2'
            >
              <Card className='w-full'>
                <CardHeader>
                  <CardTitle className='overflow-hidden text-ellipsis text-nowrap'>
                    {!isEng ? item.title : item.engTitle}
                  </CardTitle>
                  <CardDescription>
                    {!isEng ? item.placeName : item.engPlaceName}
                  </CardDescription>
                </CardHeader>
                <CardFooter className='flex flex-col items-start gap-1'>
                  {!isHappening ? (
                    <span className='text-sm'>
                      {startDate
                        .setLocale(isEng ? 'en-US' : 'es-AR')
                        .monthShort?.concat(
                          ' ',
                          startDate.year.toString(),
                        )}{' '}
                      -{' '}
                      {endDate
                        .setLocale(isEng ? 'en-US' : 'es-AR')
                        .monthShort?.concat(' ', endDate.year.toString())}
                    </span>
                  ) : (
                    <span className='text-sm'>
                      {startDate
                        .setLocale(isEng ? 'en-US' : 'es-AR')
                        .monthShort?.concat(
                          ' ',
                          startDate.year.toString(),
                        )}{' '}
                      - Act
                    </span>
                  )}
                  {item.certification ? (
                    <a
                      href={item.certification}
                      target='_blank'
                      className='text-sm underline'
                    >
                      {!isEng ? 'Certificación' : 'Certification'}
                    </a>
                  ) : (
                    <span className='text-sm opacity-50'>No disponible</span>
                  )}
                </CardFooter>
              </Card>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
