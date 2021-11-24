
import React from 'react'
import { NavLink } from 'react-router-dom';
import "./css/General.css";

function General() {
    return (
        <div className="container--flex general__container">
            <h1>General</h1>
            <ul className="general__ul">
                <li><a href="https://www.youtube.com/watch?v=_xkSvufmjEs" rel="noreferrer" rel="noopener" target="_blank">Build a Portfolio Website</a></li>
                <li><a href="https://www.youtube.com/watch?v=8hly31xKli0&t=3240s" target="_blank" rel="noreferrer" rel="noopener">Algorithims and Data Structures</a></li>
                <li><a href="https://www.youtube.com/watch?v=-M6lANfzFsM" target="_blank" rel="noreferrer" rel="noopener">History of Computing</a></li>
            </ul>
            <NavLink to="/">Menu</NavLink>
        </div>
    )
}

export default General
