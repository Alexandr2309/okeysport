import { memo } from 'react';
import { mainPageBannerData } from 'shared/const/page';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import CupImg from 'shared/assets/images/cup.png';
import { Banner } from 'shared/ui/Banner/Banner';
import cls from './MainPageBanner.module.scss';
import { OpenOrderModal } from 'features/order';

export interface MainPageBannerProps {
  className?: string;
  onOpenModal: () => void;
}

export const MainPageBanner = memo((props: MainPageBannerProps) => {
  const { className, onOpenModal } = props;
  const { t } = useTranslation();

  return (
    <Banner wrapperCls={cls.contentWrapper}>
      <div className={cls.textWrapper}>
        <Text title={mainPageBannerData.title} className={cls.title} />
        <Text text={mainPageBannerData.text} className={cls.text} />
      </div>
      <OpenOrderModal onOpenModal={onOpenModal} className={cls.sendBtn}>
        {t('Организовать турнир')}
      </OpenOrderModal>
      <div
        className={cls.bg}
        style={{
          background: `url(${CupImg})right no-repeat`,
          backgroundSize: 'contain',
        }}
      />
    </Banner>
  );
});

MainPageBanner.displayName = 'MainPageBanner';
