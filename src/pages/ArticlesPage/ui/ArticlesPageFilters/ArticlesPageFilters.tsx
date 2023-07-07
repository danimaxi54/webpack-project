import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    ArticleSortField,
    ArticleView,
    ArticleType,
    ArticleSortSelector,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Card from 'shared/ui/Card/Card';
import Input from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from 'shared/ui/Tabs/Tabs';
import { ArticleTypeTabs } from 'features/ArticleTypeTabs';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { articlesPageActions } from '../../model/slices/articlePageSlice/articlePageSlice';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlePageFiltersProps {
    className?: string;
}

const ArticlesPageFilters: FC<ArticlePageFiltersProps> = (props) => {
    const { t } = useTranslation('articles');

    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageView);

    const {
        className,
    } = props;

    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const debouncedFetchData = useDebounce(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, 500);

    const fetchData = () => {
        dispatch(fetchArticlesList({ replace: true }));
    };

    const onChangeView = (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
        debouncedFetchData();
    };

    const onChangeSort = (newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    };

    const onChangeOrder = (newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    };

    const onChangeSearch = (search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    };

    const onChangeType = (tab: TabItem<ArticleType>) => {
        dispatch(articlesPageActions.setArticleType(tab.value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    };

    return (
        <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                    order={order}
                />

                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>

            <Card className={cls.search}>
                <Input
                    value={search}
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                />
            </Card>

            <ArticleTypeTabs
                value={type}
                onTabClick={onChangeType}
                className={cls.tabs}
            />
        </div>

    );
};

export default ArticlesPageFilters;
