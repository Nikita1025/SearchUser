import { fireEvent, screen } from '@testing-library/react';
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
    });
    test('search user', () => {
        const onSearchMock = jest.fn();

        renderComponents(<UserSearchPageFilters onSearch={onSearchMock} />);

        fireEvent.click(screen.getByTestId('button'));
        expect(onSearchMock).toHaveBeenCalledTimes(1);
    });
});
