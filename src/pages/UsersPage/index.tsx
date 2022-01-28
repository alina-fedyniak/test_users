import styles from './UsersPage.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersRequest } from '../../redux/users/actions';
import { usersSelector } from '../../redux/users/selectors';
import { useSelector } from 'react-redux';
import { User } from '../../components/User';
import { Spinner } from '../../components/Spinner';
import { useSearchParams } from 'react-router-dom';

function UsersPage(): JSX.Element {
    const dispatch = useDispatch();
    const usersData = useSelector(usersSelector);
    const [searchParams, setSearchParams] = useSearchParams();
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        if (usersData.length < 20) {
            dispatch(fetchUsersRequest());
        }

        if (fetching) {
            let page = Number(searchParams.get('page'));
            page += 1;
            dispatch(fetchUsersRequest({ page, results: 10 }));
            setSearchParams(`page=${page}`);
            setFetching(false);
        }
    }, [fetching, dispatch, searchParams, setSearchParams, usersData.length]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const scrollHandler = (event: Event) => {
        if (
            (event.target as Document).documentElement.scrollHeight -
                ((event.target as Document).documentElement.scrollTop +
                    window.innerHeight) <
            100
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
            {fetching && <Spinner />}
        </div>
    );
}

export default UsersPage;
