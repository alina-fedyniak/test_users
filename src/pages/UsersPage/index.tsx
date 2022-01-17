import styles from './UsersPage.module.scss';
import { useSelector } from 'react-redux';
import { driversSelector } from '../../redux/users/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersRequest } from '../../redux/users/actions';
import { userApi } from '../../api/userService';

userApi.fetchUsers();

function UsersPage(): JSX.Element {
    const dispatch = useDispatch();

    const users = useSelector(driversSelector);

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    return <div className={styles.usersPage}>

    </div>;
}

export default UsersPage;
