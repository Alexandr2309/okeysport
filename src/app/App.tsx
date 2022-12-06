import { Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Footer } from 'shared/ui/Footer';
import { useMatchMedia } from 'shared/lib/hooks/use-match-media';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { userActions } from 'entities/User/model/slice/userSlice';
import { useSelector } from 'react-redux';
import { getUserInitialized } from 'entities/User';
import { LangSwitcher } from 'features/lang-switcher';

export default function App() {
  const { theme } = useTheme();
  const media = useMatchMedia();
  const dispatch = useAppDispatch();
  const initialized = useSelector(getUserInitialized);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('App', {}, [theme])}>
      <Navbar media={media} />
      <Suspense fallback=''>
        <div className='content-page'>{initialized && <AppRouter />}</div>
      </Suspense>
      <LangSwitcher />
      <Footer media={media} />
    </div>
  );
}
