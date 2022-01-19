import React from 'react';
import styles from './LogOut.module.scss';
import { LogIn } from '../LogIn';
import { NavLink } from 'react-router-dom';

export function LogOut(): JSX.Element {
    return (
        <div className={styles.logOut}>
            <NavLink className={styles.logOutLink} to="/">
               <LogIn />
            </NavLink>
        </div>
    );
}
