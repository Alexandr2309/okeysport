import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Container } from 'app/providers/Layout';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import LogoIcon from 'shared/assets/icons/logo.svg';
import { Text } from 'shared/ui/Text/Text';
import HomeIcon from 'shared/assets/icons/home_footer.svg';
import MailIcon from 'shared/assets/icons/mail.svg';
import PhoneIcon from 'shared/assets/icons/phone.svg';
import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './Footer.module.scss';

export interface FooterProps {
  className?: string;
}

export const Footer = memo((props: FooterProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <footer className={classNames(cls.Footer, {}, [className])}>
      <Container className={cls.footerWrapper}>
        <AppLink to='/' className={cls.logo}>
          <LogoIcon />
          <Text title={t('OkeySport')} className={cls.logoText} />
        </AppLink>
        <div className={cls.locationWrapper}>
          <Icon Svg={HomeIcon} />
          <Text
            className={cls.locationText}
            text={t('г. Хабаровск, ул. Тихоокеанская, д. 204, офис 35')}
          />
        </div>
        <div className={cls.infoWrapper}>
          <div className={[cls.telephone, cls.infoItem].join(' ')}>
            <Icon Svg={PhoneIcon} />
            <Text text='+ 7 (926) 425 78 45' className={cls.infoItemText} />
          </div>
          <div className={[cls.mail, cls.infoItem].join(' ')}>
            <Icon Svg={MailIcon} />
            <Text text='okeysport@mail.ru' className={cls.infoItemText} />
          </div>
        </div>
      </Container>
    </footer>
  );
});

Footer.displayName = 'Footer';
