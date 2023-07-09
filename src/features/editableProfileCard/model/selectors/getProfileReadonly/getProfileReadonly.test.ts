import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileIsLoading.test', () => {
    test('should return readonly is true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };

        expect(getProfileReadonly(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
