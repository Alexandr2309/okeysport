import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { IPageData } from 'shared/const/page/mainPage/model';
import { MainPageServiceItem } from 'pages/MainPage/ui/MainPageServiceItem/MainPageServiceItem';
import { mainPageData } from 'shared/const/page';
import { Container } from 'app/providers/Layout';
import cls from './MainPageInfo.module.scss';

export interface MainPageInfoProps {
  className?: string;
}

export const MainPageInfo = memo((props: MainPageInfoProps) => {
  const { className } = props;
  const { t } = useTranslation('main');

  const renderItem = useCallback(
    (item: IPageData) => <MainPageServiceItem item={item} key={item.title} />,
    []
  );

  return (
    <Container className={classNames(cls.MainPageInfo, {}, [className])}>
      <Text
        className={cls.title}
        title={t(
          'Организация и проведение спортивных мероприятий - это комплексная составная услуга.'
        )}
      />
      <Text
        theme={TextTheme.BLACK}
        className={cls.subTitle}
        text={t(
          'В рамках организации спортивного мероприятия необходимо найти место для проведения соревнования, исходя из удобства расположения, количества участников турнира, а также подобрать аудио и звуковое оборудование, найти ведущего, предоставить питание спортсменам, а также провести аудио, фото и видео фиксацию для отчета и анализа проведения спортивного мероприятия.'
        )}
      />
      <div className={cls.info}>{mainPageData.map(renderItem)}</div>
    </Container>
  );
});

MainPageInfo.displayName = 'MainPageInfo';
