import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { servicesInfo } from 'shared/const/page';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './ServiceItem.module.scss';

export interface IServiceItem {
  className?: string;
  service: typeof servicesInfo[0];
}

export const ServiceItem = memo((props: IServiceItem) => {
  const {
    className,
    service,
  } = props;
  const { t } = useTranslation();

  return (
    <Card className={classNames(cls.ServiceItem, {}, [className])}>
      <div className={cls.imageWrapper}>
        <img src={service.img} alt={service.title} />
      </div>
      <div className={cls.infoWrapper}>
        <Text
          text={t(service.title)}
          className={cls.title}
        />
        <Text
          className={cls.text}
          text={t(service.text)}
        />
        <AppLink
          className={cls.link}
          to={service.link.path}
        >
          {service.link.text}
        </AppLink>
      </div>
    </Card>
  );
});
