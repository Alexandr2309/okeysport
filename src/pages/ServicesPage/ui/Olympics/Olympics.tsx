import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Banner } from 'shared/ui/Banner/Banner';
import { Text } from 'shared/ui/Text/Text';
import { Container } from 'app/providers/Layout';
import { olympicsInfo } from 'shared/const/page';
import { useTranslation } from 'react-i18next';
import cls from './Olympics.module.scss';

export interface OlympicsProps {
  className?: string;
}

export const Olympics = memo((props: OlympicsProps) => {
  const { className } = props;
  const { t } = useTranslation('services');

  return (
    <div className={classNames(cls.Olympics, {}, [className])}>
      <Banner className={cls.banner}>
        <Text className={cls.title} title={t('Организация спартакиад')} />
      </Banner>
      <Container>
        {olympicsInfo.map((paragraph, index) => (
          <Text key={index} text={t(paragraph)} className={cls.paragraph} />
        ))}
      </Container>
    </div>
  );
});
