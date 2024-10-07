import { screen } from '@testing-library/react';
import { renderComponents } from 'shared/lib/tests/renderComponents/renderComponents';
import { UserSearchPage } from './UserSearchPage';

describe('UserSearchPage.test', () => {
    test('with only first param', async () => {
        renderComponents(<UserSearchPage />, {
            initialState: {
                users: {
                    error: '',
                },
            },
        });
        expect(screen.getByTestId('wrapper')).toBeInTheDocument();
    });
});
