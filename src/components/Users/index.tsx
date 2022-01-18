import React from 'react';
import styles from './Users.module.scss';
// import { useSelector } from 'react-redux';
// import { usersSelector } from '../../redux/users/selectors';
import { User } from "../User";

export function Users(): JSX.Element {
    /*const users = useSelector(usersSelector);*/
/*console.log(users);*/
console.log(111111111111);
    return (
        <div className={styles.usersPage}>
            <h2>Users</h2>
           {/* {users.map(user => (
                <div key={user.gender}>
                    user.gender
                </div>
            ))}*/}
        </div>
    );
}
