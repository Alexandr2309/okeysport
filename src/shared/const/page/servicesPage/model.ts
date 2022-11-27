export type IServiceLink = {
  path: string;
  text: string;
}

export interface IServicesInfo {
  title: string;
  text: string;
  link: IServiceLink;
  img: string
}

export interface IChampionshipInfo {
  title: string;
  list: string[];
  footer: string
}
