import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { searchUsersSliceReducer } from 'pages/UserSearchPage';

export const createReduxStore = (
    initialState?:StateSchema,
) => {
    const rootReducer:ReducersMapObject<StateSchema> = {
        users: searchUsersSliceReducer,
    };

    const extraArg:ThunkExtraArg = {
        api: $api,
    };

    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),

    });
};
export type RootState = ReturnType<typeof createReduxStore>['dispatch']
