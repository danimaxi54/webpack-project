import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import DynamicModuleLoader, {
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlePageReducer } from '../../model/slices/articlePageSlice/articlePageSlice';
import cls from './ArticlePage.module.scss';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import ViewSelectorContainer from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage: FC<ArticlePageProps> = (props) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const onLoadNextPart = () => {
        dispatch(fetchNextArticlePage());
    };

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    content={
                        <Page
                            className={classNames(
                                cls.ArticlesPageRedesigned,
                                {},
                                [className],
                            )}
                            onScrollEnd={onLoadNextPart}
                            data-testid="ArticlesPage"
                        >
                            <ArticleInfiniteList className={cls.list} />

                            <ArticlePageGreeting />
                        </Page>
                    }
                    right={<FiltersContainer />}
                />
            }
            off={
                <Page
                    className={classNames('', {}, [className])}
                    onScrollEnd={onLoadNextPart}
                    data-testid="ArticlesPage"
                >
                    <ArticlesPageFilters />

                    <ArticleInfiniteList className={cls.list} />

                    <ArticlePageGreeting />
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
