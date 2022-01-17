import React from 'react';
import styles from './UserCard.module.scss';

export function User(): JSX.Element {
    return (
        <div className={styles.user}>
            <div className={styles.user__block}>
                <div className={styles.user__avatar}>avatar</div>
                <p>Имя и фамилия</p>
                <p>Дата рождения</p>
                <p>Пол</p>
            </div>
        </div>
    );
}
