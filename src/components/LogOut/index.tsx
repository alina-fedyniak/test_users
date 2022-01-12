import React from 'react';
import { Menu } from '../Menu';
import './LogOut.module.scss';
import { navConfig } from '../../utils/constants';

export function LogOut(): JSX.Element {
    return (
        <>
            <Menu text={navConfig.userInfo.label} />
            <div className="contacts">
                <h2>LogOut</h2>
            </div>
        </>
    );
}
