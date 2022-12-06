import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Map.module.scss';

interface IMapProps {
  className?: string;
}

const Map = ({ className }: IMapProps) => (
  <article className={classNames(cls.Map, {}, [className])}>
    <iframe
      height={420}
      src='https://yandex.ru/map-widget/v1/?um=constructor%3A7d09ea238f6774fb2132f9aba88ed957cef0c45303b64dbc907bf024701aefdd&amp;source=constructor'
      className={cls.mapItem}
      frameBorder='0'
    />
  </article>
);

export default Map;
