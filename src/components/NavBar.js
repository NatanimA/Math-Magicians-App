import React from "react";
import { NavLink } from "react-router-dom";
import { Router } from "react-router-dom";

const NavBar = () => {
    return(
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
    )
}

export default NavBar