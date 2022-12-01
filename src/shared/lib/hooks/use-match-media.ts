import { useLayoutEffect, useState } from 'react';

const queries = [
  '(max-width: 720px)',
  '(max-width: 1280px)',
  '(min-width: 1440px)',
];
const queriesNames = ['isMobile', 'isLaptop', 'isDesktop'];

type IUseMatchMediaResult = Record<
  'isMobile' | 'isLaptop' | 'isDesktop',
  boolean
>;

export function useMatchMedia(): IUseMatchMediaResult {
  const matchMediaQueries = queries.map(matchMedia);
  const getValues = matchMediaQueries.map((query) => query.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    matchMediaQueries.forEach((query) =>
      query.addEventListener('change', handler)
    );

    return () =>
      matchMediaQueries.forEach((query) =>
        query.removeEventListener('change', handler)
      );
  }, [getValues, matchMediaQueries]);

  const result = queriesNames.reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );

  return <IUseMatchMediaResult>result;
}
