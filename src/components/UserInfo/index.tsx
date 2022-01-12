import React from 'react';
import { Menu } from '../Menu';
import './UserInfo.module.scss';
import { navConfig } from '../../utils/constants';

export function UserInfo(): JSX.Element {
    return (
        <>
            <Menu text={navConfig.userInfo.label} />
            <div className="project">
                <h2>UserInfo</h2>
            </div>
        </>
    );
}
