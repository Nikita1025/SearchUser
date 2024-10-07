import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { User } from 'entities/User';
import {
    getUserSearch, getUserSearchError, getUserSearchIsLoading, getUserSearchUsers,
} from './getUserSearchData';

describe('getUserSearchUsers', () => {
    test('should return users data', () => {
        const users: User[] = [{
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
        }];

        const state: DeepPartial<StateSchema> = {
            users: {
                users,
                isLoading: false,
            },
        };
        expect(getUserSearchUsers(state as StateSchema)).toEqual(users);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            users: {
                isLoading: false,
            },
        };
        expect(getUserSearchIsLoading(state as StateSchema)).toEqual(false);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            users: {
                error: 'error',
            },
        };
        expect(getUserSearchError(state as StateSchema)).toEqual('error');
    });
    test('should return search', () => {
        const state: DeepPartial<StateSchema> = {
            users: {
                search: 'bret',
            },
        };
        expect(getUserSearch(state as StateSchema)).toEqual('bret');
    });
});
