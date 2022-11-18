import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Container } from 'app/providers/Layout';
import { mainPageBannerData } from 'shared/const/page';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import CupImg from 'shared/assets/images/cup.png';
import cls from './MainPageBanner.module.scss';

export interface MainPageBannerProps {
  className?: string;
}

export const MainPageBanner = memo((props: MainPageBannerProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.MainPageBanner, {}, [className])}>
      <div className={cls.gradientWrapper}>
        <Container className={cls.contentWrapper}>
          <div className={cls.textWrapper}>
            <Text
              title={mainPageBannerData.title}
              className={cls.title}
            />
            <Text
              text={mainPageBannerData.text}
              className={cls.text}
            />
          </div>
          <Button>{t('Организовать турнир')}</Button>
          <div
            className={cls.bg}
            style={{
              background: `url(${CupImg})right no-repeat`,
              backgroundSize: 'contain',
            }}
          />
        </Container>
      </div>
    </div>
  );
});
