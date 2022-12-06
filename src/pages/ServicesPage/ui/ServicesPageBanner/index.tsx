import React from 'react';
import { useTranslation } from 'react-i18next';
import { Banner } from 'shared/ui/Banner/Banner';
import { Text } from 'shared/ui/Text/Text';
import cls from './ServicesPageBanner.module.scss';

const ServicesPageBanner = () => {
  const { t } = useTranslation('services');

  return (
    <Banner>
      <Text className={cls.title} title={t('Услуги')} />
    </Banner>
  );
};

export default ServicesPageBanner;
