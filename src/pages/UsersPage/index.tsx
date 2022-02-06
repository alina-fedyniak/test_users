import styles from './UsersPage.module.scss';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersRequest } from '../../redux/users/actions';
import {isLodingSelector, usersSelector} from '../../redux/users/selectors';
import { useSelector } from 'react-redux';
import { Spinner } from '../../components/Spinner';
import { useSearchParams } from 'react-router-dom';
import { Link } from '../../components/Link';

function UsersPage(): JSX.Element {
    const dispatch = useDispatch();
    const usersData = useSelector(usersSelector);
    const isLoding = useSelector(isLodingSelector);
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (isLoding) {
            let page = Number(searchParams.get('page'));
            page += 1;
            setPage(page);
            setSearchParams(`page=${page}`);
        }
    }, [isLoding]);


    useEffect(() => {
        if (usersData.length < 20) {
            dispatch(fetchUsersRequest());
        }

        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const scrollHandler = useCallback((event: Event) => {
            if (
                (event.target as Document).documentElement.scrollHeight -
                    ((event.target as Document).documentElement.scrollTop +
                        window.innerHeight) <
                300
            ) {
                dispatch(fetchUsersRequest({ page, results: 10 }));
            }
        }, [dispatch]);


    return (
        <div className={styles.usersPage}>
            {usersData.map(user => (
                <Link key={user.login.uuid} user={user} />
            ))}
            {isLoding && <Spinner />}
        </div>
    );
}

export default UsersPage;
