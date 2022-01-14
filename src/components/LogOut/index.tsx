import React from 'react';
import './LogOut.module.scss';
import styles from "./LogOut.module.scss";
import { NavBar} from "../NavBar";

export function LogOut(): JSX.Element {
    return (
        <>
            <NavBar />
            <div className={styles.LogOutPage}>
                <h2>LogOut</h2>
            </div>
        </>
    );
}
