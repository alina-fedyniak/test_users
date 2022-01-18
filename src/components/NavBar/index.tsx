import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { Container } from '../Container';

export function NavBar(): JSX.Element {
    return (
        <div className={styles.navBar}>
            <Container>
                <div className={styles.navList}>
                    <NavLink className={styles.navList__link} to="/users">
                        users
                    </NavLink><NavLink className={styles.navList__link} to="/users-page">
                        users-page
                    </NavLink>
                    <NavLink className={styles.navList__link} to="/userInfo">
                        userInfo
                    </NavLink>
                    <NavLink className={styles.navList__link} to="/logOut">
                        logOut
                    </NavLink>
                </div>
            </Container>
        </div>
    );
}
