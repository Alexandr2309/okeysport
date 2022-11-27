import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Services } from 'pages/ServicesPage/ui/Services';
import cls from './ServicesPage.module.scss';
import ServicesPageBanner from '../ServicesPageBanner';

interface IServicesPageProps {
  className?: string;
}

const ServicesPage = (props: IServicesPageProps) => {
  const { className } = props;
  return (
    <section className={classNames(cls.ServicesPage, {}, [className])}>
      <ServicesPageBanner />
      <Services />
    </section>
  );
};

export default ServicesPage;
