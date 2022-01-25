import React from 'react';
import styles from './LogOut.module.scss';
import { useDispatch } from 'react-redux';
import { fetchIsLogout } from '../../redux/users/actions';
import { NavLink } from 'react-router-dom';

export function LogOut(): JSX.Element {
    const dispatch = useDispatch();

    const clickLogOut = () => {
        dispatch(fetchIsLogout());
    };

    return (
        <div className={styles.logOut}>
            <NavLink className={styles.logOut__link} to="/">
                <div className={styles.logOut__btn} onClick={clickLogOut}>
                    Log Out
                </div>
            </NavLink>
        </div>
    );
}
