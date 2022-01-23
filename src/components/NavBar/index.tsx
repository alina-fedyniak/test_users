import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { Container } from '../Container';

export function NavBar(): JSX.Element {
    return (
        <div className={styles.navBar}>
            <Container>
                <div className={styles.navList}>
                    <NavLink className={styles.navList__link} to="/users-page">
                        Users
                    </NavLink>
                    <NavLink className={styles.navList__link} to="/user-info">
                        User Info
                    </NavLink>
                    <NavLink className={styles.navList__link} to="/log-out">
                        Log Out
                    </NavLink>
                </div>
            </Container>
        </div>
    );
}
