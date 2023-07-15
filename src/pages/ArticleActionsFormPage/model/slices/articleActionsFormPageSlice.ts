import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleActionsFormPageSchema } from '../types/articleActionsFormPageSchema';

const initialState: ArticleActionsFormPageSchema = {
    isLoading: false,
    error: undefined,
    readonly: true,
};

const articlePageSlice = createSlice({
    name: 'articlePage',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {},
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(fetchArticlesList.pending, (state, action) => {
        //         state.isLoading = true;
        //         state.error = undefined;
        //
        //         if (action.meta.arg.replace) {
        //             articlesAdapter.removeAll(state);
        //         }
        //     })
        //     .addCase(
        //         fetchArticlesList.fulfilled,
        //         (state, action) => {
        //             state.isLoading = false;
        //             state.hasMore = action.payload.length >= state.limit;
        //
        //             if (action.meta.arg.replace) {
        //                 articlesAdapter.setAll(state, action.payload);
        //             } else {
        //                 articlesAdapter.addMany(state, action.payload);
        //             }
        //         },
        //     )
        //     .addCase(fetchArticlesList.rejected, (state, action) => {
        //         state.isLoading = false;
        //         state.error = action.payload;
        //     });
    },
});

export const { reducer: articlePageReducer, actions: articlesPageActions } =
    articlePageSlice;
