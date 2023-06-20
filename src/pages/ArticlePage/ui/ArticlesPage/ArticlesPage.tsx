import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from 'entities/Article';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import ArticleViewSelector from 'feature/ArticleViewSelector/ArticleViewSelector';
import Page from 'shared/ui/Page/Page';
import { fetchNextArticlePage } from 'pages/ArticlePage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    articlePageReducer,
    articlesPageActions,
    getArticles,
} from '../../model/slices/articlePageSlice/articlePageSlice';

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
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({
            page: 1,
        }));
    });

    const onLoadNextPart = () => {
        dispatch(fetchNextArticlePage());
    };

    const onChangeView = (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    };

    if (error) {
        return <div>error</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={classNames('', {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />

                <ArticleList
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default ArticlesPage;
