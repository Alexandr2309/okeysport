import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListBlock } from '../../model/types';
import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';

export interface IArticleListBlockProps {
  className?: string;
  block: ArticleListBlock;
}

export const ArticleListBlockComponent = memo(
  (props: IArticleListBlockProps) => {
    const { className, block } = props;

    return (
      <div className={classNames(cls.root, {}, [className])}>
        <Text className={cls.title} text={block.title} />
        <ul className={cls.list}>
          {block.list.map((point, index) => (
            <li key={index} className={cls.listItem}>
              <Text className={cls.point} text={point} />
            </li>
          ))}
        </ul>
        {block.text && <Text className={cls.text} text={block.text} />}
      </div>
    );
  }
);
