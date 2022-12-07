import championshipImg from 'shared/assets/images/services_page/championship.png';
import tournamentImg from 'shared/assets/images/services_page/tournaments.png';
import competitionImg from 'shared/assets/images/services_page/competition.png';
import olympicsImg from 'shared/assets/images/services_page/olympics.png';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { IServicesInfo, IChampionshipInfo, IServiceLink } from './model';

const constantLinkServices: IServiceLink = {
  text: 'Узнать подробнее →',
  path: RoutesPath.contacts,
};

export const servicesInfo: IServicesInfo[] = [
  {
    title: 'Организация чемпионатов',
    text: 'Проведение спортивных соревнований на получение высокого звания чемпиона.',
    link: constantLinkServices,
    img: championshipImg,
  },
  {
    title: 'Проведение спортивных турниров',
    text: 'Спортивное соревнование по игровым видам спорта с большим числом участников.',
    link: constantLinkServices,
    img: tournamentImg,
  },
  {
    title: 'Проведение соревнований',
    text: 'Состязание среди спортсменов или команд спортсменов по различным видам спорта.',
    link: constantLinkServices,
    img: competitionImg,
  },
  {
    title: 'Организация спартакиад',
    text: 'Спортивные соревнования между командами или отдельными участниками, которые проводятся как для детей, так и для взрослых.',
    link: constantLinkServices,
    img: olympicsImg,
  },
];

export const championshipInfo: IChampionshipInfo = {
  title: 'О чем обязаны позаботиться организаторы чемпионата?',
  list: [
    'Подбор подходящей площадки в зависимости от специфики и масштаба мероприятия',
    'Клининговое обслуживание и базовая подготовка объекта для проведения мероприятия',
    'Оформление площади',
    'Разработка и производство сувенирной, полиграфической и рекламной продукции',
    'Организация отдела логистики',
    'Техническое оснащение площадки',
    'Организация питания на площадке',
    'Работа с волонтерами и администраторами мероприятия',
    'Организация проживания гостей и участников',
    'Трансфер гостей и участников',
    'Координация безопасности во время проведения чемпионата',
    'Организация охраны и противопожарной профилактики',
    'Обеспечение мобильной и радио связи на объекте',
    'Организация фото и видеосъемки, прямой трансляции',
  ],
  footer:
    'И это далеко не весь перечень обязанностей, закреплённых за организатором чемпионата. При этом важно понимать, что для реализации всех вышеперечисленных пунктов необходимо привлечь специалистов-подрядчиков и проследить за выполнением работ каждого из них.',
};

export const tournamentsInfo: string[] = [
  'Организация и проведение спортивных турниров - это одно из основных направлений нашей работы. Спортивные турниры являются одной из наиболее эффективных форм организации массовой оздоровительной, физкультурной и спортивной работы в череде корпоративных мероприятий.',
  '«Готовый проект» — от аренды поля до церемонии награждения: Аренда и подготовка лучших спортивных площадок, профессиональный спортивный инвентарь, регламент проведения соревнования и турнирные таблицы, подробная статистика, качественные фото и видео отчёты, красочные церемонии открытия и закрытия, развлекательная программа, профессиональное и объективное судейство, фуршетная линия, ценные подарки, кубки, медали и дипломы. Участие в соревнованиях и турнирах может принять каждый сотрудник компании, а значит фирма может охватить максимальную аудиторию, привлекая ее к занятиям спортом и пропагандируя среди работников здоровый образ жизни. Компания реализует социальную ответственность перед своими сотрудниками и членами их семей, устраивая различные спортивно-массовые мероприятия. Наша компания может предложить проведение турниров по футболу, волейболу, хоккею, лыжным гонкам, настольному теннису, шахматам и другим видам спорта.',
  'Организация и проведение спортивных мероприятий - это комплексная составная услуга.\n' +
    'Так, в рамках организации спортивного мероприятия необходимо найти место для проведения соревнования, исходя из удобства расположения, количества участников турнира, а также подобрать аудио и звуковое оборудование, найти ведущего, предоставить питание спортсменам в соответствиии с нормами, а также провести аудио, фото и видео фиксацию для отчета и анализа проведения спортивного мероприятия.',
];

export const competitionsInfo: string[] = [
  'Соревнования по спортивным играм проводятся в соответствии с планом физкультурно-оздоровительных и спортивных мероприятий или планом-календарём соревнований. Спортивно-массовые соревнования позволяют решать педагогические, спортивно-методические и общественно-социальные задачи. Во время соревнований решаются те же педагогические задачи, что и на занятиях физической культурой и спортом в целом, т.е. совершенствование физической, технической, тактической, психической и теоретической подготовленности.',
  'Правила соревнований определяют общую организацию соревнований по игровому виду спорта: виды соревнований и систему их проведения; особенности оборудования мест соревнований, инвентарь; состав судейской коллегии и их обязанности; правила судейства; правила для участников и другие специфические для данного игрового вида спорта условия.',
  'Соревнования - яркое, эмоциональное зрелище. Удовольствие от спортивных зрелищ возникает вследствие соучастия в них зрителя, которого привлекает высокий уровень развития двигательных качеств, смелые и решительные действия участников, их высокие достижения.',
  'Положение о соревнованиях определяет условия проведения конкретного соревнования. Оно разрабатывается организацией, которая проводит или на которую возложено проведение данного соревнования. Положение должно быть своевременно доведено до коллективов физической культуры и спортивных организаций.',
];

export const olympicsInfo: string[] = [
  'Спартакиада - это спортивные соревнования и состязания между командами или отдельными участниками, которые проводятся как для детей, так и для взрослых.',
  'Организация спартакиад требует профессионального подхода и учета всех особенностей и нюансов. Например, важно сразу же определить целевую аудиторию - ее возраст, пол, особенности, сферу деятельности, цели и задачи. Ведь специфика организации детских спортивных мероприятий значительно отличается от спартакиады для взрослых, особенно, если дело касается проведения копроративных спортивных мероприятий. \n' +
    'Проведение спартакиады для организации - довольно распространенный вид корпоративных мероприятий. Корпоративная спртакиада станет ярким праздником в корпоративной жизни сотрудников, скрасит трудовые будни и позволит замотивировать коллектив на дальнейшую активную совместную работу.',
  'В большинстве случаев спартакиада включает в себя состязания по самым распространенным видам спорта. Это может быть футбол, волейбол, регби, баскетбол, гонки на лыжах, хоккей, и т.п.\n' +
    'Для подведения итогов и оценивания результатов спартакиады привлекают профессиональных судей высокой категории. Выявленные победители получают различные награды - медали, грамоты, дипломы и т д.',
];
