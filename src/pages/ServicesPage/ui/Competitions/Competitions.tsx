import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Banner } from 'shared/ui/Banner/Banner';
import { Text } from 'shared/ui/Text/Text';
import { Container } from 'app/providers/Layout';
import { competitionsInfo, olympicsInfo } from 'shared/const/page';
import { useTranslation } from 'react-i18next';
import cls from './Competitions.module.scss';

export interface CompetitionsProps {
  className?: string;
}

export const Competitions = memo((props: CompetitionsProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Competitions, {}, [className])}>
      <Banner className={cls.banner}>
        <Text
          className={cls.title}
          title={t('Организация соревнований')}
        />
      </Banner>
      <Container>
        {competitionsInfo.map((paragraph, index) => (
          <Text
            key={index}
            text={t(paragraph)}
            className={cls.paragraph}
          />
        ))}
      </Container>
    </div>
  );
});
