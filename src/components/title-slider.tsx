import { Title, TitleLetter } from '@/components/ui/title';

import Autoplay from 'embla-carousel-autoplay';
import { TITLES } from '@/const/titles';
import useEmblaCarousel from 'embla-carousel-react';

export default function TitleSlider() {
  const [emblaRef] = useEmblaCarousel(
    { axis: 'y', align: 'start', loop: false },
    [Autoplay({ loop: false })],
  );

  return (
    <div className='embla'>
      <div className='embla__viewport overflow-hidden' ref={emblaRef}>
        <div className='embla__container flex h-[88px] cursor-grab flex-col active:cursor-grabbing sm:h-12 md:h-[88px] lg:h-14'>
          {TITLES.map((title) => (
            <div
              key={title + '_key'}
              className='embla__slide min-h-0 shrink-0 grow basis-full pt-1'
            >
              <Title className='w-min select-none sm:w-fit md:w-min lg:w-fit'>
                {title.split('').map((l, idx) => (
                  <TitleLetter
                    key={`title_letter_${l}_${idx}`}
                    delay={0.25 + (idx + 1) * 0.05}
                  >
                    {l}
                  </TitleLetter>
                ))}
              </Title>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
