import DevelopmentIcon from 'shared/assets/icons/script.svg';
import CoordinationIcon from 'shared/assets/icons/coordination.svg';
import TeamIcon from 'shared/assets/icons/team.svg';
import FlagIcon from 'shared/assets/icons/flags.svg';
import NewsIcon from 'shared/assets/icons/news.svg';
import MovieIcon from 'shared/assets/icons/movie.svg';
import { IPageData } from './model';

export const mainPageData: IPageData[] = [
  {
    num: '01',
    Icon: DevelopmentIcon,
    text: 'Программа проведения соревнования предполагает распределение этапов во времени, с указанием ответсвтенных по выполнению. Соединить отдельные услуги и номера в единое захватывающее действие поможет написание сценария. Для успешного проведения вашего спортивного мероприятия мы рекомендуем не пренебрегать данной услугой. Наша компания поможет вам в составлении программы соревнования или в написании сценария.',
    title: 'Разработка программы',
  },
  {
    num: '02',
    Icon: CoordinationIcon,
    text: 'Это самый важный этап в организации проведения соревнований, так как неслаженная работа исполнителей может привести к большим неприятностям, от выхода из временного графика, до полного срыва. Мы веделим вам координатора, который согласует план и объем услуг, составит полную смету. Наш координатор будет присутствовать на месте проведения и отслеживать все составные услуги: трансферы, питание, технический персонал, а также артистов и прочих исполнителей отдельных услуг.',
    title: 'Координация и логистика',
  },
  {
    num: '03',
    Icon: TeamIcon,
    text: 'Организация и проведение спортивных мероприятий не может обойтись без привлечения большого количества персонала. Это и всевозможный администраторативный персонал, и врачи, и сотрудники службы безопасности, контролирующие соблюдение порядка и доступы в ту или иную зону, и профессиональный ведущий спортивных мероприятий, и музыканты, и певцы, а также разнообразный технический персонал. Мы поможем составить профессиональную команду, которая будет работать слаженно под руководством нашего координатора и четко выполнять все поставленные задачи.',
    title: 'Подбор персонала для соревнований',
  },
  {
    num: '04',
    Icon: FlagIcon,
    text: 'Стиль спортивного мероприятия - это разработка всего комплекса полиграфии, а также оформления самого места проведения соревнования. Любые соревнования подразумевают зрителей и настроение праздника, что обеспечивается в том числе красочным оформлением помещения. Услуга по разработке стиля может включать: разработку логотипа, а также цветовые решения для оформления зала; дизайн-макет бейджей, грамот, медалей и другие услуги.',
    title: 'Разработка стиля соревнований',
  },
  {
    num: '05',
    Icon: NewsIcon,
    text: 'При организации спортивного мероприятия важную роль играет реклама его в средствах массовой информации. Важно привлечь как болельщиков, которые поддерживают участников, так и СМИ с целями освещения соревнований или других спортивных событий в новостных лентах и на телевидении. Уровень и популярность соревнований во многом определяется тем, как организована работа по его продвижению в том числе и в Интернете, на транспорте, на улицах города. Мы не только разместим информацию о предстоящем событии, но разработаем и согласуем дизайн-макеты рекламных материалов в едином стиле, а также создадим, при необходимости, интернет сайт вашего мероприятия.',
    title: 'Реклама и освещение в СМИ',
  },
  {
    num: '06',
    Icon: MovieIcon,
    text: 'Для отчета о проведении соревнования как перед вышестоящими организаторами или же спонсорами, так и для удобства анализа организации требуется видео фиксация. Мы организуем фото и видеосъемку спортивного мероприятия.',
    title: 'Фото и видео съемка',
  },
];
export const mainPageBannerData = {
  title: 'Организация спортивных турниров по всей России',
  text: 'Мы всегда готовы предложить свежие идеи для спортивных турниров. Помните, подготовка подобного мероприятия на высоком уровне требует опыта, профессионализма и креативного подхода – выбирайте агентство с хорошей репутацией.',
};
