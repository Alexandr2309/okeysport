/**
 * Created by Саня on 26.09.2022
 */
import { useTranslation } from 'react-i18next';
import { MainPageBanner } from 'pages/MainPage/ui/MainPageBanner/MainPageBanner';
import { MainPageInfo } from '../MainPageInfo/ui/MainPageInfo';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainPageBanner />
      <MainPageInfo />
    </>
  );
};

export default MainPage;
