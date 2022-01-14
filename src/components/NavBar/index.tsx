import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

export function NavBar(): JSX.Element {
    return (
        <div className={styles.navBar}>
            <h2>
                <NavLink className={styles.navBar__link} to="/">
                </NavLink>
            </h2>
            <div className={styles.navList}>
                <NavLink className={styles.navList__link} to="/users">
                    users
                </NavLink>
                <NavLink className={styles.navList__link} to="/userInfo">
                    userInfo
                </NavLink>
                <NavLink className={styles.navList__link} to="/logOut">
                    logOut
                </NavLink>
            </div>
        </div>
    );
}
