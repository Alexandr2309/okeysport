import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './NewsPage.module.scss';

export interface NewsPageProps {
  className?: string;
}

const NewsPage = memo((props: NewsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NewsPage, {}, [className])}>
      {t('Новости')}
    </div>
  );
});

export default NewsPage;
NewsPage.displayName = 'NewsPage';
