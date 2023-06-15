import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from 'entities/Article';

interface ArticlePageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlePageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                view={ArticleView.BIG}
                articles={[]}
                isLoading
            />
        </div>
    );
};

export default ArticlesPage;
