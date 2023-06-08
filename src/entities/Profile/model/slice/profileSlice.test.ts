import {
    profileActions, profileReducer, ProfileSchema, updateProfileData, ValidateProfileError,
} from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ivanov',
    firstname: 'daniil',
    currency: Currency.RUB,
    city: 'Moscow',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('set cansel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data, form: { username: '' },
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.canselEdit(),
        )).toEqual({
            readonly: true,
            validateError: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '' },
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: 'admin' }),
        )).toEqual({
            form: { username: 'admin' },
        });
    });

    test('test update profile pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
            readonly: false,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
            readonly: true,
        });
    });

    test('test update profile fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            form: data,
            data,
        });
    });
});
