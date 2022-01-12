import React from 'react';
import { Menu } from '../Menu';
import './Users.module.scss';
import { navConfig } from '../../utils/constants';

export function Users(): JSX.Element {
    return (
        <>
            <Menu text={navConfig.users.label} />
            <div className="about">
                <h2>Users</h2>
            </div>
        </>
    );
}
