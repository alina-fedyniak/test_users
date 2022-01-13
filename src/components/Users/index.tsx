import React from 'react';
import './Users.module.scss';
import styles from "./Users.module.scss";

export function Users(): JSX.Element {
    return (
        <>
            <div className={styles.usersPage}>
                <h2>Users</h2>
            </div>
        </>
    );
}
