import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { IPageData } from 'shared/const/page/mainPage/model';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './MainPageServiceItem.module.scss';
import { useTranslation } from 'react-i18next';

export interface MainPageServiceItemProps {
  className?: string;
  item: IPageData;
}

export const MainPageServiceItem = memo((props: MainPageServiceItemProps) => {
  const { className, item } = props;
  const { t } = useTranslation('main');

  return (
    <article className={classNames(cls.MainPageServiceItem, {}, [className])}>
      <div className={cls.iconWrapper}>
        <item.Icon className={cls.icon} />
      </div>
      <div className={cls.infoWrapper}>
        <div className={cls.infoHeader}>
          <Text title={t(item.num)} className={cls.num} />
          <Text title={t(item.title)} className={cls.title} />
        </div>
        <Text
          theme={TextTheme.BLACK}
          text={t(item.text)}
          className={cls.text}
        />
      </div>
    </article>
  );
});
