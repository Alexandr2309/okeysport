import React, { memo, useCallback, useEffect } from 'react';
import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader';
import {
  articleDetailsReducer,
  fetchArticleDetails,
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/article-details';
import { useSelector } from 'react-redux';
import { PageLoader } from 'widgets/PageLoader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleBlock, ArticleBlockType } from '../../model/types';
import { ArticleTextBlockComponent } from 'entities/article/ui/article-text-block';
import { ArticleImageBlockComponent } from 'entities/article/ui/article-image-block';
import { ArticleListBlockComponent } from 'entities/article/ui/article-list-block';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface IArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: IArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const data = useSelector(getArticleDetailsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticleDetails(id));
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block?.type) {
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent block={block} key={block.id} />;
      case ArticleBlockType.IMAGES:
        return <ArticleImageBlockComponent block={block} key={block.id} />;
      case ArticleBlockType.LIST:
        return <ArticleListBlockComponent block={block} key={block.id} />;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <PageLoader />
      </>
    );
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    );
  } else {
    content = <>{data?.blocks.map(renderBlock)}</>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <section className={classNames(cls.root, {}, [])}>{content}</section>
    </DynamicModuleLoader>
  );
});
