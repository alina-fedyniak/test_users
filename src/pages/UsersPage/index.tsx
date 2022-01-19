import styles from './UsersPage.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersRequest } from '../../redux/users/actions';
import { usersSelector } from '../../redux/users/selectors';
import { useSelector } from 'react-redux';
import { User } from '../../components/User';

function UsersPage(): JSX.Element {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    return (
        <div className={styles.usersPage}>
            {users.map((user, key) => (
                <User key={key} user={user} />
            ))}
        </div>
    );
}

export default UsersPage;
