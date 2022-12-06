import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { aboutCompanyInfo } from 'shared/const/page';
import { Text } from 'shared/ui/Text/Text';
import cls from './AboutCompany.module.scss';

export interface AboutCompanyProps {
  className?: string;
}

export const AboutCompany = memo((props: AboutCompanyProps) => {
  const { className } = props;
  const { t } = useTranslation('about');

  return (
    <div className={classNames(cls.AboutCompany, {}, [className])}>
      <Text
        text={t(aboutCompanyInfo.naming.text)}
        className={cls[aboutCompanyInfo.naming.cls || '']}
      />
      <Text
        text={t(aboutCompanyInfo.info.text)}
        className={cls[aboutCompanyInfo.info.cls || '']}
      />
      <div className={cls.images}>
        {aboutCompanyInfo.images.map((image, i) => (
          <div className={cls.imgWrapper} key={i}>
            <img src={image.img} alt={image.alt} className={cls.img} />
          </div>
        ))}
      </div>
    </div>
  );
});
