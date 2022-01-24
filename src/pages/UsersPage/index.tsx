import styles from './UsersPage.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersRequest } from '../../redux/users/actions';
import { usersSelector } from '../../redux/users/selectors';
import { useSelector } from 'react-redux';
import { User } from '../../components/User';
import axios from 'axios';

function UsersPage(): JSX.Element {
    const dispatch = useDispatch();
    const usersData = useSelector(usersSelector);

    const [users, setUsers] = useState(usersData);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if (fetching) {
            axios
                .get(
                    '/?results=10&inc=registered,id,name,picture,dob,gender,location,phone&page=' +
                        currentPage,
                )
                .then((response: any) => {
                    console.log(response.data.results);
                    setUsers([...users, ...response.data.results]);
                    setCurrentPage(prevState => prevState + 1);
                })
                .finally(() => setFetching(false));
        }
    });

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const scrollHandler = (event: any) => {
        if (
            event.target.documentElement.scrollHeight -
                (event.target.documentElement.scrollTop + window.innerHeight) <
            1
        ) {
            setFetching(true);
        }
    };

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
