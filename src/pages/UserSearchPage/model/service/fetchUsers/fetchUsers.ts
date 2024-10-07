import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User } from 'entities/User';
import { addQueryParams } from 'shared/lib/url/addQueryParams';
import { getUserSearch } from 'pages/UserSearchPage/model/selectors/getUserSearchData';

export const fetchUsers = createAsyncThunk<User[], void, ThunkConfig<string>>(
    'fetchUsers',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, getState, dispatch,
        } = thunkAPI;
        const username = getUserSearch(getState());

        try {
            addQueryParams({
                username,
            });
            let response;
            if (username) {
                response = await extra.api.get<User[]>('/users', {
                    params: {
                        username,
                    },
                });
            } else {
                response = await extra.api.get<User[]>('/users');
            }

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            // @ts-ignore
            return rejectWithValue(e.message);
        }
    },
);
