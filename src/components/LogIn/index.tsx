import * as React from 'react';
import styles from './LogIn.module.scss';
import { isLoginSelector} from '../../redux/users/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIsLogin } from '../../redux/users/actions';

export const LogIn = () => {
    const isLogin = useSelector(isLoginSelector);
    const dispatch = useDispatch();

    const clickLogIn = () => {
        dispatch(fetchIsLogin());
    };

    return (
        <div className={styles.btnLink}>
            <div className={styles.btn} onClick={clickLogIn}>
                Log In
            </div>
        </div>
    );
};
