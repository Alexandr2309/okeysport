import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './styles.module.scss';
import { NewsDetailsHeader } from './details-header';
import { useParams } from 'react-router-dom';
import { ArticleDetails, getArticleDetailsData } from 'entities/article';
import { useSelector } from 'react-redux';
import { Container } from 'app/providers/Layout';
import { OrderModal } from 'features/order';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { OpenOrderModal } from 'widgets/order';

interface INewsDetailsPageProps {
  className?: string;
}

const NewsDetailsPage = (props: INewsDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('news-details');
  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const data = useSelector(getArticleDetailsData);

  const onOpenModal = useCallback(() => {
    setIsOpenOrder(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpenOrder(false);
  }, []);

  return (
    <section className={classNames(cls.root, {}, [className])}>
      <NewsDetailsHeader title={data?.title} />
      <Container>
        <ArticleDetails id={id!} />
      </Container>
      <Container className={cls.modal}>
        <OpenOrderModal className={cls.btn} withText>
          {t('Отправить заявку')}
        </OpenOrderModal>
        {isOpenOrder && (
          <OrderModal isOpen={isOpenOrder} onClose={onCloseModal} />
        )}
      </Container>
    </section>
  );
};

export default NewsDetailsPage;
