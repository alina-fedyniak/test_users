import styles from './UsersPage.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersRequest } from '../../redux/users/actions';
import { loadingSelector, usersSelector } from '../../redux/users/selectors';
import { useSelector } from 'react-redux';
import { User } from '../../components/User';
import axios from 'axios';
import { Spinner } from '../../components/Spinner';
import { useSearchParams } from 'react-router-dom';

function UsersPage(): JSX.Element {
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelector);
    const usersData = useSelector(usersSelector);

    const [searchParams, setSearchParams] = useSearchParams();
    const [fetching, setFetching] = useState(false);
    const [loading, setLoading] = useState(true);

    /* const [users, setUsers] = useState(usersData);
     const [currentPage, setCurrentPage] = useState(1);
     const [fetching, setFetching] = useState(true);
     */

    useEffect(() => {
        if (usersData.length < 20) {
            dispatch(fetchUsersRequest());
        }

        if (fetching) {
            let page = Number(searchParams.get('page'));
            page += 1;
            setLoading(true);

            dispatch(fetchUsersRequest({ page, results: 10 }));
            setSearchParams(`page=${page}`);
            setFetching(false);
            setLoading(false);
        }
    }, [fetching, dispatch, searchParams, setSearchParams, usersData.length]);
    /* useEffect(() => {
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
    });*/

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const scrollHandler = (event: Event) => {
        if (
            (event.target as Document).documentElement.scrollHeight -
            ((event.target as Document).documentElement.scrollTop + window.innerHeight) <
            1
        ) {
            setFetching(true);
        }
    };

    useEffect(() => {
        if (usersData.length < 20) {
            dispatch(fetchUsersRequest());
        }
    }, [dispatch]);

    return (
        <div className={styles.usersPage}>
            {usersData.map(user => (
                <User key={user.login.uuid} user={user} />
            ))}
            {loading && <Spinner />}
        </div>
    );
}

export default UsersPage;