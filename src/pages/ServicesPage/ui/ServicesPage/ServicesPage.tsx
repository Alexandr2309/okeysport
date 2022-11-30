import { classNames } from 'shared/lib/classNames/classNames';
import { Services } from '../Services';
import { Championship } from '../Championship/Championship';
import { Tournaments } from '../Tournaments/Tournaments';
import { Olympics } from '../Olympics/Olympics';
import { Competitions } from '../Competitions/Competitions';
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
      <Championship />
      <Tournaments />
      <Competitions />
      <Olympics />
    </section>
  );
};

export default ServicesPage;
