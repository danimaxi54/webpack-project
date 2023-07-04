import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import Page from 'widgets/Page/ui/Page';
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import {
    articlePageReducer,
    getArticles,
} from '../../model/slices/articlePageSlice/articlePageSlice';

import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage: FC<ArticlePageProps> = (props) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);

    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlePageError);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    const onLoadNextPart = () => {
        dispatch(fetchNextArticlePage());
    };

    if (error) {
        return <div>error</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                className={classNames('', {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticlesPageFilters />

                <ArticleList
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default ArticlesPage;
