// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import { NavLink } from 'react-router-dom';

const NavBar = () => (
        <header>
            <h1>Math Magicians</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to='/quotes'>Quotes</NavLink>
                        <NavLink to='/calculator'>Calculator</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
);

export default NavBar;