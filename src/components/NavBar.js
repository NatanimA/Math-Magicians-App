import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
        <header>
            <h1>Math Magicians</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>  
                    </li>
                    <li>
                        <NavLink to='/quotes'>Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/calculator'>Calculator</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </header>
);

export default NavBar;