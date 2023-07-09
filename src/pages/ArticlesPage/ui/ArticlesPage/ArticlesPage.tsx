import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import Page from '@/widgets/Page/ui/Page';
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList';
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlePageReducer } from '../../model/slices/articlePageSlice/articlePageSlice';
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

    const onLoadNextPart = () => {
        dispatch(fetchNextArticlePage());
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                className={classNames('', {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticlesPageFilters />

                <ArticleInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>

    );
};

export default ArticlesPage;
