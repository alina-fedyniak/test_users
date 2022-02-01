import React from 'react';
import styles from './Link.module.scss';
import { User as UserType } from '../../interfaces';
import { NavLink } from 'react-router-dom';
import { User } from '../User';

export function Link({ user }: { user: UserType }): JSX.Element {
    return (
        <NavLink className={styles.card__link} to="/user-info" state={user}>
            <User user={user} />
        </NavLink>
    );
}
