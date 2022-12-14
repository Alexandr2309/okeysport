import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/storeProvider';
import { ThemeContextProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';

import 'shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ThemeContextProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeContextProvider>
    </BrowserRouter>
  </StoreProvider>
);
