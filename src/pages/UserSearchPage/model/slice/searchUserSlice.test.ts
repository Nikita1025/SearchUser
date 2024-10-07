import { SearchUserSchema, searchUsersSliceReducer } from 'pages/UserSearchPage';
import { searchUsersSliceActions } from 'pages/UserSearchPage/model/slice/searchUserSlice';

describe('searchUsersSlice.test', () => {
    test('set search fulfilled', async () => {
        const state: DeepPartial<SearchUserSchema> = {
            search: '',
        };
        expect(searchUsersSliceReducer(
            state as SearchUserSchema,
            searchUsersSliceActions.setSearch('Test2'),
        )).toEqual({
            search: 'Test2',
        });
    });
});
