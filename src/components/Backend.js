
import React from 'react'
import { NavLink } from "react-router-dom";

function Backend() {
    return (
        <div className="container--flex general__container">
            <h1>General</h1>
            <ul className="general__ul">
                <li><a href="https://www.youtube.com/watch?v=-bjJetWnNZg" rel="noreferrer" rel="noopener" target="_blank">Backend Guide 2021</a></li>
                <li><a href="https://www.youtube.com/watch?v=TlB_eWDSMt4" target="_blank" rel="noreferrer" rel="noopener">Node.js Tutorial</a></li>
                <li><a href="https://www.youtube.com/watch?v=HXV3zeQKqGY" target="_blank" rel="noreferrer" rel="noopener">SQL Tutorial</a></li>
            </ul>
            <NavLink to="/">Menu</NavLink>
        </div>
    )
}

export default Backend
