import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ArticleListItemSkeleton from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => (
    <ArticleListItemSkeleton key={index} view={view} />
));

const ArticleList: FC<ArticleListProps> = (props) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
        />
    );

    if (isLoading) {
        return (
            <div className={cls.ArticleList}>
                {getSkeletons(view)}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {articles.length
                ? articles.map(renderArticle)
                : null}
        </div>
    );
};

export default ArticleList;
