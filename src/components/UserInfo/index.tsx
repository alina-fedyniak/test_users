import React from 'react';
import styles from './UserInfo.module.scss';
import { User as UserType } from '../../interfaces';

export function UserInfo({ user }: { user: UserType }): JSX.Element {
    return (
        <div className={styles.userInfo}>
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
                            <div className={styles.user__date}>
                                {user.dob.date}
                            </div>
                            <div className={styles.user__gender}>
                                {user.gender}
                            </div>
                            <div className={styles.user__address}>
                                {user.location.city}
                            </div>
                            <div className={styles.user__phone}>
                                {user.phone}
                            </div>
                            <div className={styles.user__registered}>
                                {user.registered.date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
