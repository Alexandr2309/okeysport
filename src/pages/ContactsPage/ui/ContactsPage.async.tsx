import { lazy } from 'react';

export const ContactsPageAsync = lazy(
  async () =>
    new Promise((res) =>
      setTimeout(() => {
        // @ts-expect-error
        res(import('./ContactsPage'));
      }, 1)
    )
);
