import { FC } from 'react';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { getArticles } from '../../model/slices/articlePageSlice/articlePageSlice';

interface ArticleInfiniteListProps {
    className?: string;
}

const ArticleInfiniteList: FC<ArticleInfiniteListProps> = (props) => {
    const { className } = props;

    const error = useSelector(getArticlePageError);
    const articles = useSelector(getArticles.selectAll);

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlesPageView);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    if (error) {
        return null;
    }

    return (
        <ArticleList
            view={view}
            articles={articles}
            isLoading={isLoading}
            className={className}
        />
    );
};

export default ArticleInfiniteList;
