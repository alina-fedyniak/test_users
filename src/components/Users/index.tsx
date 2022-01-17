import React from 'react';
import './Users.module.scss';
import styles from './Users.module.scss';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../redux/users/selectors';

export function Users(): JSX.Element {
    const users = useSelector(usersSelector);
console.log(users);
    return (
        <div className={styles.usersPage}>
            <h2>Users</h2>
        </div>
    );
}
