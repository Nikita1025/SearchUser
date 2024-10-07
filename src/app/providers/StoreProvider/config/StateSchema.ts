import { AxiosInstance } from 'axios';
import { SearchUserSchema } from 'pages/UserSearchPage';

export interface StateSchema{
    users: SearchUserSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T>{
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}
