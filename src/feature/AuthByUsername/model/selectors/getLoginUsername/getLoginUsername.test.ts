import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from 'feature/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'name',
            },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual('name');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
