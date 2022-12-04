import cls from './ApplicationsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader';
import {
  ApplicationTable,
  appTableReducer,
  fetchApplications,
} from 'entities/application';
import { Container } from 'app/providers/Layout';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface RequestsPageProps {
  className?: string;
}

const reducers: ReducerList = {
  applicationsTable: appTableReducer,
};

const ApplicationsPage = memo((props: RequestsPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <main className={classNames(cls.RequestsPage, {}, [className])}>
        <Container>
          <ApplicationTable />
        </Container>
      </main>
    </DynamicModuleLoader>
  );
});
ApplicationsPage.displayName = 'ApplicationsPage';
export default ApplicationsPage;
