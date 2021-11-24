
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./css/Menu.css";

function Menu() {
    return (
        <div className="container--flex menu--container">
            <nav className="container--flex menu__nav">
                <NavLink to="/general">
                    General
                </NavLink>
                <NavLink to="/frontend">
                    Front End
                </NavLink>
                <NavLink to="/backend">
                    Back End
                </NavLink>
                <NavLink to="/interview">
                    Interview
                </NavLink>
            </nav>
        </div>
    )
};

export default Menu
