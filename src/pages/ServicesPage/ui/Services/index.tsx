import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { servicesInfo } from 'shared/const/page';
import { ServiceItem } from 'pages/ServicesPage/ui/ServiceItem/ServiceItem';
import cls from './Services.module.scss';

interface IServicesProps {
  className?: string;
}

export const Services = (props: IServicesProps) => {
  const { className } = props;
  return (
    <section className={classNames(cls.ServicesPage, {}, [className])}>
      <ul className={cls.list}>
        {servicesInfo.map((service) => (
          <li key={service.title}>
            <ServiceItem service={service} />
          </li>
        ))}
      </ul>
    </section>
  );
};
