/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { useDebounce } from 'shared/lib/hooks/use-debounce';

const queries = [720, 1280, 1440];
const queriesNames = ['isMobile', 'isLaptop', 'isDesktop'];

export type IUseMatchMediaResult = Record<
  'isMobile' | 'isLaptop' | 'isDesktop',
  boolean
>;

export function useMatchMedia() {
  function updateSize() {
    setSize([
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ]);
  }

  const [size, setSize] = useState([0, 0]);
  const debounceUpdateSize = useDebounce(updateSize, 250);

  useEffect(() => {
    window.addEventListener('resize', debounceUpdateSize);

    return () => window.removeEventListener('resize', debounceUpdateSize);
  }, [debounceUpdateSize]);

  return <IUseMatchMediaResult>queriesNames.reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: size[0] < queries[index],
    }),
    {}
  );
}
