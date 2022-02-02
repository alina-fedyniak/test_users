import * as React from 'react';
import styles from './LogIn.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { setLogIn } from '../../redux/auth/actions';
import { fetchUsersRequest } from "../../redux/users/actions";
import { Translate } from '../../lang';

export const LogIn = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const auth = localStorage.getItem('auth');

        if (auth) {
            dispatch(fetchUsersRequest());
        }
    }, [dispatch]);

    const clickLogIn = useCallback(() => {
        dispatch(setLogIn(true));
    }, [dispatch]);

    return (
        <div className={styles.btnLink}>
            <div className={styles.btn} onClick={clickLogIn}>
                {Translate('logIn')}
            </div>
        </div>
    );
};
