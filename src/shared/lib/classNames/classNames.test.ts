import { classNames } from './classNames';

describe('', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with arr params', () => {
        const expected = 'someClass cls1 cls2';

        expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe(expected);
    });

    test('with all params', () => {
        const expected = 'someClass cls1 cls2 hovered scrollable';

        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['cls1', 'cls2'],
        )).toBe(expected);
    });

    test('with param negative', () => {
        const expected = 'someClass cls1 cls2 hovered';

        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['cls1', 'cls2'],
        )).toBe(expected);
    });

    test('with param undefined', () => {
        const expected = 'someClass cls1 cls2 hovered';

        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['cls1', 'cls2'],
        )).toBe(expected);
    });
});
