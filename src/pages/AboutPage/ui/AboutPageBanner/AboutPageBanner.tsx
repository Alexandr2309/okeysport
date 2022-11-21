import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Banner } from 'shared/ui/Banner/Banner';
import { useTranslation } from 'react-i18next';
import cls from './AboutPageBanner.module.scss';

export interface AboutPageBannerProps {
  className?: string;
}

export const AboutPageBanner = memo((props: AboutPageBannerProps) => {
  const { className } = props;
  const { t } = useTranslation('about');

  return (
    <Banner
      wrapperCls={cls.contentWrapper}
      className={cls.banner}
    >
      <Text
        className={cls.title}
        title={t('О компании')}
      />
    </Banner>
  );
});
