/**
 * Created by Саня on 26.09.2022
 */
import { useTranslation } from 'react-i18next';
import { MainPageBanner } from 'pages/MainPage/ui/MainPageBanner/MainPageBanner';
import { MainPageInfo } from '../MainPageInfo/ui/MainPageInfo';
import { OrderModal } from 'features/order';
import { useCallback, useState } from 'react';
import { Container } from 'app/providers/Layout';
import cls from './styles.module.scss';
import { OpenOrderModal } from 'widgets/order';
import { Result, ResultStatus } from 'shared/ui/Result';
import { Button as ButtonAntd } from 'antd';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <>
      <MainPageBanner />
      <MainPageInfo />
      <Container>
        <OpenOrderModal className={cls.btn}>
          {t('Узнать подробнее')}
        </OpenOrderModal>
      </Container>
    </>
  );
};

export default MainPage;
