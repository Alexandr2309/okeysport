import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Banner } from 'shared/ui/Banner/Banner';
import React from 'react';
import cls from './styles.module.scss';

export interface INewsDetailsHeaderProps {
  className?: string;
  title?: string;
}

export const NewsDetailsHeader = ({
  className,
  title,
}: INewsDetailsHeaderProps) => {
  const { t } = useTranslation('news-details');

  return (
    <>
      <Banner wrapperCls={cls.contentWrapper} className={cls.banner}>
        <Text className={cls.title} title={t(title || '')} />
      </Banner>
    </>
  );
};
