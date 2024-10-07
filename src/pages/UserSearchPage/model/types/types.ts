import { User } from 'entities/User';

export interface SearchUserSchema {
    isLoading?: boolean;
    error?: string;
    users?: User[]
    search?:string
}
