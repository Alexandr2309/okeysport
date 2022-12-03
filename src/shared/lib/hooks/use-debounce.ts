import { MutableRefObject, useCallback, useRef } from 'react';

export function useDebounce(cb: (...args: any[]) => any, delay: number) {
  const timerRef = useRef() as MutableRefObject<any>;

  return useCallback(
    (...args: any[]) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        cb(...args);
      }, delay);
    },
    [cb, delay]
  );
}
