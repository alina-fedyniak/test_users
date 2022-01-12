import React from 'react';
import { NavLink } from 'react-router-dom';

export function Menu({ text }: { text: string; }): JSX.Element {

    return (
        <nav className="navBar">
            <h2>
                <NavLink className="link" to="/">
                    Project
                </NavLink>
            </h2>
            <ul className="menu">
                <li>
                    <NavLink className="link" to="/users">
                        users
                    </NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/userInfo">
                        userInfo
                    </NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/logOut">
                        logOut
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
