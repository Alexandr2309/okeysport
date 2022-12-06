import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Banner } from 'shared/ui/Banner/Banner';
import { Text } from 'shared/ui/Text/Text';
import { Container } from 'app/providers/Layout';
import { championshipInfo, tournamentsInfo } from 'shared/const/page';
import cls from './Tournaments.module.scss';

export interface TournamentsProps {
  className?: string;
}

export const Tournaments = memo((props: TournamentsProps) => {
  const { className } = props;
  const { t } = useTranslation('services');

  return (
    <div className={classNames(cls.Tournament, {}, [className])}>
      <Banner className={cls.banner}>
        <Text
          className={cls.title}
          title={t('Проведение спортивных турниров')}
        />
      </Banner>
      <Container>
        {tournamentsInfo.map((paragraph, index) => (
          <Text key={index} text={t(paragraph)} className={cls.paragraph} />
        ))}
      </Container>
    </div>
  );
});
