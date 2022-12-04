import { lazy } from 'react';

const NewsDetailsPageAsync = lazy(() => import('./ui'));

export { NewsDetailsPageAsync as NewsDetailsPage };
