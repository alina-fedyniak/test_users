import styles from './UsersPage.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersRequest } from '../../redux/users/actions';
import { Users } from '../../components/Users'
import {usersSelector} from "../../redux/users/selectors";
import { useSelector } from 'react-redux';

function UsersPage(): JSX.Element {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
console.log(23424234);

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    return (
        <div className={styles.usersPage}>
            <Users />
            {users.map(user => (
                user.gender
            ))}
        </div>
    );
}

export default UsersPage;
