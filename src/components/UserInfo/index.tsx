import React from 'react';
import './UserInfo.module.scss';
import styles from "./UserInfo.module.scss";
import { NavBar} from "../NavBar";

export function UserInfo(): JSX.Element {
    return (
        <>
            <NavBar />
            <div className={styles.infoPage}>
                <h2>UserInfo</h2>
            </div>
        </>
    );
}
