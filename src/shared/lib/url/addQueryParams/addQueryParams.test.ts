import { getQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });

        expect(params).toBe('?test=value');
    });

    test('test with with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            test1: 'value1',
        });

        expect(params).toBe('?test=value&test1=value1');
    });

    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            test1: undefined,
        });

        expect(params).toBe('?test=value');
    });
});
