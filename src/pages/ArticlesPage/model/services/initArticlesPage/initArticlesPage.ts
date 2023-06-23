import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getQueryParam } from 'shared/lib/url/getQueryParams/getQueryParams';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article';
import { articlesPageActions } from '../../slices/articlePageSlice/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageInited,
} from '../../selectors/articlePageSelectors';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const {
            getState,
            dispatch,
        } = thunkApi;

        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromUrl = getQueryParam('order') as SortOrder;
            const sortFromUrl = getQueryParam('sort') as ArticleSortField;
            const searchFromUrl = getQueryParam('search');

            if (orderFromUrl) {
                dispatch(articlesPageActions.setOrder(orderFromUrl));
            }

            if (sortFromUrl) {
                dispatch(articlesPageActions.setSort(sortFromUrl));
            }

            if (searchFromUrl) {
                dispatch(articlesPageActions.setSearch(searchFromUrl));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
