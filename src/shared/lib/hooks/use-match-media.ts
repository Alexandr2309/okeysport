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
  const [isFirst, setIsFirst] = useState(true);
  function updateSize() {
    setSize([
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ]);
  }

  const [size, setSize] = useState([0, 0]);
  const debounceUpdateSize = useDebounce(updateSize, 250);

  useEffect(() => {
    if (isFirst) {
      debounceUpdateSize();
      setIsFirst(false);
    }

    window.addEventListener('resize', debounceUpdateSize);
    return () => window.removeEventListener('resize', debounceUpdateSize);
  }, [debounceUpdateSize, isFirst]);

  return <IUseMatchMediaResult>queriesNames.reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: size[0] < queries[index],
    }),
    {}
  );
}
