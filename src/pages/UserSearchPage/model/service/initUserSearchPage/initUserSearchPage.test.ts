import { initUserSearchPage } from './initUserSearchPage';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('../fetchUsers/fetchUsers');

describe('initUserSearchPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initUserSearchPage, {
            users: {
                users: [],
            },
        });

        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).toBeCalledTimes(3);
    });
    test('initUserSearchPage not called', async () => {
        const thunk = new TestAsyncThunk(initUserSearchPage, {
            users: {
                users: [],
            },
        });

        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).toBeCalledTimes(3);
    });
});
