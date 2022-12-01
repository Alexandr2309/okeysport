import cls from './RequestsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

export interface RequestsPageProps {
  className?: string;
}

const RequestsPage = memo((props: RequestsPageProps) => {
  const { className } = props;
  return <div className={classNames(cls.RequestsPage, {}, [className])}></div>;
});
RequestsPage.displayName = 'RequestsPage';
export default RequestsPage;
