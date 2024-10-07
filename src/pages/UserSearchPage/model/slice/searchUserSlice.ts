import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchUserSchema } from '../types/types';
import { User } from 'entities/User';
import { fetchUsers } from '../../model/service/fetchUsers/fetchUsers';

const initialState: SearchUserSchema = {
    isLoading: false,
    error: undefined,
    users: undefined,
    search: '',
};

export const searchUsersSlice = createSlice({
    name: 'searchUser',
    initialState,
    reducers: {
        setSearch: (state, action:PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log(action);
            });
    },
});

export const { actions: searchUsersSliceActions } = searchUsersSlice;
export const { reducer: searchUsersSliceReducer } = searchUsersSlice;
