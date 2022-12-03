import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article } from '../../model/types';
import { memo } from 'react';
import { ArticleItem } from '../article-item';
import { ArticleSkeletonItem } from '../article-item/skeleton';

export interface ArticleListProps {
  className?: string;
  data: Article[];
  isLoading: boolean;
}

const getSkeletons = () =>
  Array.from({ length: 8 })
    .fill(0)
    .map((item, index) => <ArticleSkeletonItem key={index} />);

export const ArticleList = memo(
  ({ className, data, isLoading }: ArticleListProps) => {
    return (
      <section className={classNames(cls.root, {}, [className])}>
        {data?.map((article) => (
          <ArticleItem item={article} key={article.id} />
        ))}
        {isLoading && getSkeletons()}
      </section>
    );
  }
);
