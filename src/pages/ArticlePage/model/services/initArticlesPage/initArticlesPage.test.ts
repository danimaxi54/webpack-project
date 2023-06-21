import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from '../initArticlesPage/initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toBeCalled();
    });

    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
