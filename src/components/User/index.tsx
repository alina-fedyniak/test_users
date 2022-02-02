import React from 'react';
import styles from './User.module.scss';
import { User as UserType } from '../../interfaces';

export function User({ user }: { user: UserType }): JSX.Element {
    return (
        <div className={styles.card}>
            <div className={styles[user.gender]}>
                <div className={styles.user}>
                    <div className={styles.user__avatar}>
                        <img src={user.picture.medium} alt="avatar" />
                    </div>
                    <div className={styles.user__info}>
                        <div className={styles.user__name}>
                            {user.name.first + ' ' + user.name.last}
                        </div>
                        <div className={styles.user__date}>{user.dob.date}</div>
                        <div className={styles.user__gender}>{user.gender}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
