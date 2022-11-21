export interface IAboutPageData {
  text: string;
  cls?: string;
}

export interface IAboutPageImage {
  img: string;
  alt?: string;
}

export interface IAboutCompany {
  images: IAboutPageImage[];
  naming: IAboutPageData;
  info: IAboutPageData;
}

export interface IAboutGoal {
  text: string;
  id: number;
}

export interface ICard {
  id: string;
  num: string;
  title: string;
  subtitle: string;
}
