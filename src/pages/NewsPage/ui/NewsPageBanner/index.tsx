import React, { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Banner } from 'shared/ui/Banner/Banner';
import { useTranslation } from 'react-i18next';
import cls from './styles.module.scss';

export interface AboutPageBannerProps {
  className?: string;
}

export const NewsPageBanner = memo((props: AboutPageBannerProps) => {
  const { className } = props;
  const { t } = useTranslation('news');

  return (
    <Banner wrapperCls={cls.contentWrapper} className={cls.banner}>
      <Text className={cls.title} title={t('События')} />
    </Banner>
  );
});

NewsPageBanner.displayName = 'NewsPageBanner';
