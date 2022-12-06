import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article } from '../../model/types';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import cls from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

export interface ArticleItemProps {
  className?: string;
  item: Article;
}

export const ArticleItem = memo(({ className, item }: ArticleItemProps) => {
  const na = useNavigate();
  const { t } = useTranslation('news');

  const onClickHandler = () => {
    na(`${RoutesPath.news_details}${item.id}`);
  };

  return (
    <Card
      onClick={onClickHandler}
      className={classNames(cls.root, {}, [className])}
    >
      <div className={cls.imageWrapper}>
        <img src={item.img} alt={item.title} className={cls.img} />
      </div>
      <Text title={t(item.title)} className={cls.title} />
    </Card>
  );
});
