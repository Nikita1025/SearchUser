import { screen } from '@testing-library/react';
import { renderComponents } from 'shared/lib/tests/renderComponents/renderComponents';
import { UserSearchPageFilters } from './UserSearchPageFilters';

describe('UserSearchPageFilters', () => {
    test('renders correctly', () => {
        renderComponents(<UserSearchPageFilters />, {
            initialState: {
                users: {
                    search: '',
                },
            },
        });
        expect(screen.getByTestId('sort-wrapper')).toBeInTheDocument();
        expect(screen.getByTestId('input')).toBeInTheDocument();
    });
});
