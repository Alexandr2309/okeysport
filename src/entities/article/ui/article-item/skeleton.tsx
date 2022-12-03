import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton';

export interface IArticleSkeletonItemProps {
  className?: string;
}

export const ArticleSkeletonItem = ({
  className,
}: IArticleSkeletonItemProps) => {
  return (
    <Card className={classNames(cls.root, {}, [className])}>
      <div className={cls.imageWrapper}>
        <Skeleton className={cls.img} />
      </div>
      <Skeleton className={cls.textSkeleton} backgroundColor='#fff' />
    </Card>
  );
};
