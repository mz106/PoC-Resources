
import React from 'react'
import { NavLink } from "react-router-dom";

function Interview() {
    return (
        <div className="container--flex general__container">
            <h1>Interviews</h1>
            <ul className="general__ul">
                <li><a href="https://www.youtube.com/watch?v=GBuHSRDGZBY" rel="noreferrer" rel="noopener" target="_blank">Five Problem Solving Tips</a></li>
                <li><a href="https://www.youtube.com/watch?v=ckW4cUqui_w" target="_blank" rel="noreferrer" rel="noopener">How to pass a coding interview</a></li>
                <li><a href="https://www.youtube.com/watch?v=gawb4hc1_2U" target="_blank" rel="noreferrer" rel="noopener">Basic Algorithims Overview</a></li>
            </ul>
            <NavLink to="/">Menu</NavLink>
        </div>
    )
}

export default Interview
