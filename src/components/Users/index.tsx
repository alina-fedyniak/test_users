import React from 'react';
import './Users.module.scss';
import styles from "./Users.module.scss";
import { NavBar} from "../NavBar";

export function Users(): JSX.Element {
    return (
        <>
            <NavBar />
            <div className={styles.usersPage}>
                <h2>Users</h2>
            </div>
        </>
    );
}
