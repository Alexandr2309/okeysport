/**
 * Created by Саня on 26.09.2022
 */
import { useTranslation } from 'react-i18next';
import { Container } from 'app/providers/Layout';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      {t('Главная страница')}
    </Container>
  );
};

export default MainPage;
