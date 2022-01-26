import * as React from 'react';
import styles from './LogIn.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setAuth } from '../../redux/auth/actions';
import { authSelector } from "../../redux/auth/selectors";
import { fetchUsersRequest } from "../../redux/users/actions";
import { Translate } from '../../lang';

export const LogIn = () => {
    const dispatch = useDispatch();
    const authUsers = useSelector(authSelector);

    useEffect(() => {
        const auth = localStorage.getItem('auth');

        if (auth) {
            dispatch(fetchUsersRequest(auth));
        }
    }, [dispatch]);

    const clickLogIn = () => {
        dispatch(setAuth(true));
    };

    return (
        <div className={styles.btnLink}>
            <div className={styles.btn} onClick={clickLogIn}>
                {Translate('logIn')}
            </div>
        </div>
    );
};
