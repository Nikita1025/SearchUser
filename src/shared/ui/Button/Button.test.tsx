import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('button', () => {
    test('test button ', () => {
        render(<Button>Button</Button>);
        expect(screen.getByText('Button')).toBeTruthy();
    });
    test('test button outline theme', () => {
        render(<Button theme={ButtonTheme.OUTLINE}>Button</Button>);
        expect(screen.getByText('Button')).toHaveClass('outline');
    });
});
