import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './UserList.module.scss';

interface UserListSkeletonProps{
    className?:string
}

export const UserListSkeleton = ({ className }:UserListSkeletonProps) => (
    <div className={classNames(cls.ArticleItem, {}, [className])}>
        <Card className={cls.card}>
            <Skeleton width={320} height={103} className={cls.username} />
        </Card>
    </div>
);
