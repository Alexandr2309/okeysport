import { lazy } from 'react';

export const RegisterAsync = lazy(async () => new Promise((res) => (
  setTimeout(() => {
    // @ts-expect-error
    res(import('./RegisterPage'));
  }, 1)
)));
