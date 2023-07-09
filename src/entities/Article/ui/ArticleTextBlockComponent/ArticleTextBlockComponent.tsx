import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Text from '@/shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (props) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text className={cls.title} title={block.title} />
            )}

            {block.paragraphs.map((paragraph) => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
};

export default ArticleTextBlockComponent;
