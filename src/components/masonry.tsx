/* eslint-disable react-refresh/only-export-components */

import * as React from 'react';

import { cn } from '@/lib/utils';

// Hook para manejar columnas y gap según breakpoints
// eslint-disable-next-line react-refresh/only-export-components
export function useMediaValues(
  medias: number[] | undefined,
  columns: [number, ...number[]],
  gap: [number, ...number[]],
): { columns: number; gap: number } {
  const [values, setValues] = React.useState({
    columns: columns[0],
    gap: gap[0],
  });

  React.useEffect(() => {
    if (!medias) {
      setValues({ columns: columns[0], gap: gap[0] });
      return;
    }

    const mediaQueries = medias.map((media) =>
      window.matchMedia(`(min-width: ${media}px)`),
    );

    const onSizeChange = () => {
      const matches = mediaQueries.reduce((acc, mediaQuery, idx) => {
        if (mediaQuery.matches) return idx + 1;
        return acc;
      }, 0);

      setValues({ columns: columns[matches], gap: gap[matches] });
    };

    onSizeChange(); // Llamada inicial
    mediaQueries.forEach((mq) => mq.addEventListener('change', onSizeChange));

    return () => {
      mediaQueries.forEach((mq) =>
        mq.removeEventListener('change', onSizeChange),
      );
    };
  }, [medias, columns, gap]); // Dependencias correctas

  return values;
}

// Tipos para las props del componente Masonry
export type MasonryProps<T> = React.ComponentPropsWithoutRef<'div'> & {
  items: T[];
  render: (item: T, idx: number) => React.ReactNode;
  config: {
    columns: number | [number, ...number[]];
    gap: number | [number, ...number[]];
    media?: number[];
  };
  placeholder?: React.JSX.Element;
};

// Convierte un número o array en un array seguro
export function createSafeArray(
  data: number | [number, ...number[]],
): [number, ...number[]] {
  return Array.isArray(data) ? (data.length > 0 ? data : [0]) : [data];
}

// Componente principal de Masonry
export function Masonry<T>({
  items = [],
  render,
  placeholder,
  config,
  className,
  ...rest
}: MasonryProps<T>): React.JSX.Element {
  const { columns, gap } = useMediaValues(
    config.media,
    createSafeArray(config.columns),
    createSafeArray(config.gap),
  );

  if (columns === 0 && placeholder) {
    return placeholder;
  }

  // Distribución dinámica en columnas
  const columnsArray = Array.from({ length: columns }, () => [] as T[]);
  items.forEach((item, idx) => {
    columnsArray[idx % columns].push(item);
  });

  return (
    <div
      {...rest}
      className={cn(
        'grid gap-4',
        {
          'grid-cols-1': columns === 1,
          'grid-cols-2': columns === 2,
          'grid-cols-3': columns === 3,
          'grid-cols-4': columns === 4,
          'grid-cols-5': columns === 5,
          'grid-cols-6': columns === 6,
        },
        className,
      )}
      style={{ gap: `${gap}px` }}
    >
      {columnsArray.map((column, idx) => (
        <div key={idx} className='flex flex-col gap-4'>
          {column.map((item, jdx) => render(item, jdx))}
        </div>
      ))}
    </div>
  );
}
