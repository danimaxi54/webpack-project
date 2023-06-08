import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const ArticlePage: FC<ArticlePageProps> = (props) => {
    const { t } = useTranslation('article');

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            Articles page
        </div>
    );
};

export default ArticlePage;
