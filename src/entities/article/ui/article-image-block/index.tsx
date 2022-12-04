import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleImagesBlock } from '../../model/types';
import { memo, useCallback } from 'react';
import { useMatchMedia } from 'shared/lib/hooks/use-match-media';

export interface IArticleImageBlockProps {
  className?: string;
  block: ArticleImagesBlock;
}

export const ArticleImageBlockComponent = memo(
  (props: IArticleImageBlockProps) => {
    const { className, block } = props;
    const { isMobile } = useMatchMedia();

    const renderImage = useCallback(
      (image: ArticleImagesBlock['images'][0], index: number) => {
        return (
          <li className={cls.imgWrapper} key={index}>
            <img src={image} alt='' className={cls.image} />
          </li>
        );
      },
      []
    );

    return (
      <section className={classNames(cls.root, {}, [className])}>
        <ul className={cls.list}>
          {isMobile
            ? block.images.slice(0, 2).map(renderImage)
            : block.images.map(renderImage)}
        </ul>
      </section>
    );
  }
);
