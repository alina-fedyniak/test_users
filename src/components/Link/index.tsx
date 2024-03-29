import React from 'react';
import styles from './Link.module.scss';
import { User as UserType } from '../../interfaces';
import { NavLink } from 'react-router-dom';
import { User } from '../User';

export function Link({ user }: { user: UserType }): JSX.Element {
    return (
        <NavLink className={styles.link} to={`/user-info/${user.login.uuid}`}>
            <User user={user} />
        </NavLink>
    );
}
