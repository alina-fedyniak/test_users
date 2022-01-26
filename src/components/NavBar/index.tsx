import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { Container } from '../Container';
import { Translate } from '../../lang';

export function NavBar(): JSX.Element {
    return (
        <div className={styles.navBar}>
            <Container>
                <div className={styles.navList}>
                    <NavLink className={styles.navList__link} to="/users-page">
                        {Translate('users')}
                    </NavLink>
                    <NavLink className={styles.navList__link} to="/user-info">
                        {Translate('userInfo')}
                    </NavLink>
                    <NavLink className={styles.navList__link} to="/log-out">
                        {Translate('logOut')}
                    </NavLink>
                </div>
            </Container>
        </div>
    );
}
