import { Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { getAuth } from 'firebase/auth';

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('App', {}, [theme])}>
      <Navbar />
      <Suspense fallback="">
        <div className="content-page">
          {/* <Sidebar /> */}
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
