import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { articlesPageActions } from '../../model/slices/articlePageSlice/articlePageSlice';
import { SortOrder } from '@/shared/types/sort';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

export const useArticleFilters = () => {
    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageView);
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

    const onChangeView = (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
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

    return {
        view,
        sort,
        order,
        search,
        type,
        onChangeView,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
    };
};
