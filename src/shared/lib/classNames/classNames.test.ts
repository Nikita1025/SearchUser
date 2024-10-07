import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('test class ', () => {
        expect(classNames('class')).toBe('class');
    });
    test('test additional ', () => {
        expect(classNames(
            'class',
            {},
            ['class1', 'class2'],
        )).toBe('class class1 class2');
    });
    test('test Mods ', () => {
        expect(classNames(
            'class',
            { hovered: true, selected: true },
            ['class1', 'class2'],
        )).toBe('class class1 class2 hovered selected');
    });
    test('test undefined ', () => {
        expect(classNames(
            'class',
            { hovered: true, selected: undefined },
            ['class1', 'class2'],
        )).toBe('class class1 class2 hovered');
    });
});
