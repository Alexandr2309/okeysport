/**
 * Created by Саня on 26.09.2022
 */
import { useTranslation } from 'react-i18next';
import { MainPageBanner } from 'pages/MainPage/ui/MainPageBanner/MainPageBanner';
import { MainPageInfo } from '../MainPageInfo/ui/MainPageInfo';
import { OpenOrderModal, OrderModal } from 'features/order';
import { useCallback, useState } from 'react';
import { Container } from 'app/providers/Layout';
import cls from './styles.module.scss';

const MainPage = () => {
  const { t } = useTranslation();
  const [isOpenOrder, setIsOpenOrder] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsOpenOrder(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpenOrder(false);
  }, []);

  return (
    <>
      <MainPageBanner onOpenModal={onOpenModal} />
      <MainPageInfo />
      <Container>
        <OpenOrderModal className={cls.btn} onOpenModal={onOpenModal}>
          {t('Узнать подробнее')}
        </OpenOrderModal>
      </Container>
      {isOpenOrder && (
        <OrderModal isOpen={isOpenOrder} onClose={onCloseModal} />
      )}
    </>
  );
};

export default MainPage;
