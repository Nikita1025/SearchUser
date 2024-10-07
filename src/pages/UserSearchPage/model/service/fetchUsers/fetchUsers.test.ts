import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { User } from 'entities/User';
import { fetchUsers } from 'pages/UserSearchPage/model/service/fetchUsers/fetchUsers';

const users: User[] = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    },
    {
        id: 2,
        name: 'Leanne Graham',
        username: 'Test',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    },
    {
        id: 3,
        name: 'Leanne Graham',
        username: 'Test2',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    },
];
describe('fetchUsers.test', () => {
    test('search user by username fulfilled', async () => {
        const thunk = new TestAsyncThunk(fetchUsers, {
            users: {
                search: 'Test2',
            },
        });
        thunk.api.get.mockResolvedValue(Promise.resolve({ data: users[2] }));

        const result = await thunk.callThunk();

        expect(result.payload).toEqual(users[2]);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
    test('fetch users  fulfilled', async () => {
        const thunk = new TestAsyncThunk(fetchUsers, {
            users: {
                search: '',
            },
        });
        thunk.api.get.mockResolvedValue(Promise.resolve({ data: users }));

        const result = await thunk.callThunk();

        expect(result.payload).toEqual(users);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchUsers);
        thunk.api.get.mockResolvedValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
