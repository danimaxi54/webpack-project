import { render, screen } from '@testing-library/react';
import { ButtonTheme, Button } from './Button';

describe('Button', () => {
    test('Test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('with only first param', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
