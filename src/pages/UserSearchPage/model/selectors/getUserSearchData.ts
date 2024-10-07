import { StateSchema } from 'app/providers/StoreProvider';

export const getUserSearchUsers = (state: StateSchema) => state.users.users;
export const getUserSearchIsLoading = (state: StateSchema) => state.users.isLoading;
export const getUserSearch = (state: StateSchema) => state.users.search || '';
export const getUserSearchError = (state: StateSchema) => state.users.error;
