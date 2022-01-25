import styles from './UsersPage.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersRequest } from '../../redux/users/actions';
import { loadingSelector, usersSelector } from '../../redux/users/selectors';
import { useSelector } from 'react-redux';
import { User } from '../../components/User';
import axios from 'axios';
import { Spinner } from '../../components/Spinner';
import { NavBar } from '../../components/NavBar';


function UsersPage(): JSX.Element {
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelector);
    const usersData = useSelector(usersSelector);

    const [users, setUsers] = useState(usersData);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (fetching) {
            setLoading(true);
            axios
                .get(
                    '/?results=10&inc=registered,login,id,name,picture,dob,gender,location,phone&page=' +
                        currentPage,
                )
                .then((response: any) => {
                    setUsers([...users, ...response.data.results]);
                    setCurrentPage(prevState => prevState + 1);
                })
                .finally(() => {
                    setFetching(false);
                    setLoading(false);
                });
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
            100
        ) {
            setFetching(true);
        }
    };

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    return (
        <>
            <NavBar />
            <div className={styles.usersPage}>
                {users.map(user => (
                    <User key={user.login.uuid} user={user} />
                ))}
                {loading && <Spinner />}
            </div>
        </>
    );
}

export default UsersPage;
