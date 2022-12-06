import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Banner } from 'shared/ui/Banner/Banner';
import { useTranslation } from 'react-i18next';
import { championshipInfo } from 'shared/const/page';
import { Container } from 'app/providers/Layout';
import cls from './Championship.module.scss';

export interface ChampionshipProps {
  className?: string;
}

export const Championship = memo((props: ChampionshipProps) => {
  const { className } = props;
  const { t } = useTranslation('services');

  return (
    <div className={classNames(cls.Championship, {}, [className])}>
      <Banner className={cls.banner}>
        <Text className={cls.title} title={t('Организация чемпионатов')} />
      </Banner>
      <Container>
        <Text text={t(championshipInfo.title)} className={cls.listTitle} />
        <ol className={cls.list}>
          {championshipInfo.list.map((point, index) => (
            <li key={index}>{t(point)}</li>
          ))}
        </ol>
        <Text text={t(championshipInfo.footer)} className={cls.footer} />
      </Container>
    </div>
  );
});
