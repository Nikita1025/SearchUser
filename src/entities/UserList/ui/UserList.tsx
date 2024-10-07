import { classNames } from 'shared/lib/classNames/classNames';
import cls from './UserList.module.scss';
import { memo } from 'react';
import { User } from 'entities/User';
import { UserListItem } from 'entities/User/ui/UserListItem';
import { UserListSkeleton } from 'entities/UserList/ui/UserListSkeleton';
import { Text } from 'shared/ui/Text/Text';

interface UsersListProps {
    className?: string
    users?: User[]
    isLoading?: boolean
}
const getSkeletons = () => new Array(5)
    .fill(0)
    .map((item, index) => (
        <UserListSkeleton className={cls.card} key={index} />
    ));

export const UserList = memo(({ className, users, isLoading }: UsersListProps) => {
    const renderList = (user: User) => (
        <UserListItem
            key={user.id}
            user={user}
        />
    );
    return (
        <div className={classNames(cls.UsersList, {}, [className])}>
            { !isLoading && users?.length! > 0
                ? users?.map(renderList)
                : (!isLoading && <Text title="Пользователь не найден" />)}
            {isLoading && getSkeletons()}
        </div>
    );
});
