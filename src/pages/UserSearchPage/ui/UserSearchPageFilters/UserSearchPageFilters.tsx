import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';

import cls from './UserSearchPageFilters.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { getUserSearch } from 'pages/UserSearchPage/model/selectors/getUserSearchData';
import { searchUsersSliceActions } from 'pages/UserSearchPage/model/slice/searchUserSlice';
import { fetchUsers } from 'pages/UserSearchPage/model/service/fetchUsers/fetchUsers';

interface ArticlesPageFiltersProps {
    className?: string
    onSearch?:()=>void
}

export const UserSearchPageFilters = memo(({ className, onSearch }: ArticlesPageFiltersProps) => {
    const dispatch = useAppDispatch();
    const search = useSelector(getUserSearch);

    const onChangeSearch = useCallback((value: string) => {
        dispatch(searchUsersSliceActions.setSearch(value));
    }, [dispatch]);

    const onSearchHandler = useCallback(() => {
        if (onSearch) {
            onSearch();
        }
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div data-testid="sort-wrapper" className={classNames(cls.sortWrapper, {}, [className])}>
            <Card className={cls.search}>
                <Input value={search} onChange={onChangeSearch} placeholder="Введите имя" />
            </Card>
            <Button data-testid="button" onClick={onSearchHandler} theme={ButtonTheme.OUTLINE}>
                Искать
            </Button>
        </div>
    );
});
