import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/storeProvider';
import { ThemeContextProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import 'app/providers/firebase/config/firebase';
import App from './app/App';
import 'shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeContextProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeContextProvider>
    </StoreProvider>
  </BrowserRouter>,
);
