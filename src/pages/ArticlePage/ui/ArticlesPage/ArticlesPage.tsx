import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface ArticlePageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlePageProps> = (props) => {
    const { t } = useTranslation('article');

    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])} />
    );
};

export default ArticlesPage;
