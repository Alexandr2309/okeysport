import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './NewsPage.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  ArticleList,
  articlesListReducer,
  fetchArticles,
  getArticles,
  getArticlesListIsLoading,
} from 'entities/article';
import { NewsPageBanner } from '../NewsPageBanner';
import { Text } from 'shared/ui/Text/Text';
import { Container } from 'app/providers/Layout';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader';

export interface NewsPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesList: articlesListReducer,
};

const NewsPage = memo((props: NewsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('news');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesListIsLoading);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <main className={classNames(cls.NewsPage, {}, [className])}>
        <NewsPageBanner />
        <Container>
          <Text
            title={
              t('Спортивные мероприятия, проведенные командой OkeySport') + ':'
            }
            className={cls.title}
          />
          <ArticleList isLoading={isLoading} data={articles} />
        </Container>
      </main>
    </DynamicModuleLoader>
  );
});

export default NewsPage;
NewsPage.displayName = 'NewsPage';
