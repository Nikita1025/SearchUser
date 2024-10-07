import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { searchUsersSliceActions } from '../../../model/slice/searchUserSlice';
import { fetchUsers } from '../../../model/service/fetchUsers/fetchUsers';

export const initUserSearchPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'users/initUserSearchPage',
    async (searchParams, thunkAPI) => {
        const {
            dispatch,
        } = thunkAPI;

        const username = searchParams.get('username');
        if (username) {
            dispatch(searchUsersSliceActions.setSearch(username));
        }
        dispatch(fetchUsers());
    },
);
