import styles from './UsersPage.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersRequest } from '../../redux/users/actions';
import { Users } from '../../components/Users'


function UsersPage(): JSX.Element {
    const dispatch = useDispatch();
console.log(23424234)
    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    return (
        <div className={styles.usersPage}>
            <Users />
        </div>
    );
}

export default UsersPage;
