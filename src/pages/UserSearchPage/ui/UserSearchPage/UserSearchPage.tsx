import { classNames } from 'shared/lib/classNames/classNames';
import cls from './UserSearchPage.module.scss';
import {
    memo, useCallback, useEffect, useState,
} from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { UserList } from 'entities/UserList';
import { useSelector } from 'react-redux';
import {
    getUserSearchError,
    getUserSearchIsLoading,
    getUserSearchUsers,
} from '../../model/selectors/getUserSearchData';
import { UserSearchPageFilters } from '../../ui/UserSearchPageFilters/UserSearchPageFilters';
import { initUserSearchPage } from '../../model/service/initUserSearchPage/initUserSearchPage';
import { useSearchParams } from 'react-router-dom';

import { ErrorModal } from '../../ui/ErrorModal/ErrorModal';

interface HomePageProps {
    className?: string
}

export const UserSearchPage = memo(({ className }: HomePageProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const dispatch = useAppDispatch();
    const users = useSelector(getUserSearchUsers);
    const error = useSelector(getUserSearchError);
    const isLoading = useSelector(getUserSearchIsLoading);
    const [searchParams] = useSearchParams();

    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);
    useEffect(() => {
        dispatch(initUserSearchPage(searchParams));
    }, [dispatch, searchParams]);

    useEffect(() => {
        if (error) {
            setIsOpen(true);
        }
    }, [error]);
    return (
        <div data-testid="wrapper" className={classNames(cls.HomePage, {}, [className])}>
            {isOpen && error && (
                <ErrorModal error={error} isOpen={isOpen} onClose={onCloseModal} />
            ) }

            <UserSearchPageFilters />
            <UserList users={users} isLoading={isLoading} />
        </div>
    );
});
