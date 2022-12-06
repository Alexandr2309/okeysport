import { classNames } from 'shared/lib/classNames/classNames';
import { Services } from '../Services';
import { Championship } from '../Championship/Championship';
import { Tournaments } from '../Tournaments/Tournaments';
import { Olympics } from '../Olympics/Olympics';
import { Competitions } from '../Competitions/Competitions';
import cls from './ServicesPage.module.scss';
import ServicesPageBanner from '../ServicesPageBanner';
import { Container } from 'app/providers/Layout';
import { OpenOrderModal } from 'widgets/order';
import { useTranslation } from 'react-i18next';

interface IServicesPageProps {
  className?: string;
}

const ServicesPage = (props: IServicesPageProps) => {
  const { className } = props;
  const { t } = useTranslation('services');

  return (
    <section className={classNames(cls.ServicesPage, {}, [className])}>
      <ServicesPageBanner />
      <Services />
      <Championship />
      <Tournaments />
      <Competitions />
      <Olympics />
      <Container>
        <OpenOrderModal className={cls.btn} withText>
          {t('Отправить заявку')}
        </OpenOrderModal>
      </Container>
    </section>
  );
};

export default ServicesPage;
