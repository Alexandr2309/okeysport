import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article } from '../../model/types';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import cls from './styles.module.scss';

export interface ArticleItemProps {
  className?: string;
  item: Article;
}

export const ArticleItem = memo(({ className, item }: ArticleItemProps) => {
  return (
    <Card className={classNames(cls.root, {}, [className])}>
      <div className={cls.imageWrapper}>
        <img src={item.img} alt={item.title} className={cls.img} />
      </div>
      <Text title={item.title} className={cls.title} />
    </Card>
  );
});
