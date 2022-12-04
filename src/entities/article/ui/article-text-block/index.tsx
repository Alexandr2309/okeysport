import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from '../../model/types';
import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';

export interface IArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: IArticleTextBlockProps) => {
    const { className, block } = props;

    return (
      <div className={classNames(cls.root, {}, [className])}>
        <Text className={cls.title} text={block.title} />
        {block.paragraphs.map((paragraph) => (
          <Text className={cls.text} text={paragraph} key={paragraph} />
        ))}
      </div>
    );
  }
);
