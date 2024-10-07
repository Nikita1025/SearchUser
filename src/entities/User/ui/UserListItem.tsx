import { classNames } from 'shared/lib/classNames/classNames';
import cls from './UserListItem.module.scss';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { User } from '../model/types/user';
import { Text, TextSize } from 'shared/ui/Text/Text';

interface UserProps {
    className?: string
    user: User
}

export const UserListItem = memo(({ className, user }: UserProps) => (
    <div
        className={classNames(cls.User, {}, [className])}
    >
        <Card className={cls.card}>
            <Text title={`${user.name}`} />
            <Text size={TextSize.M} text={`username: ${user.username}`} />
            <Text text={`email: ${user.email}`} />
            <Text text={`website: ${user.website}`} className={cls.title} />
        </Card>
    </div>
));
