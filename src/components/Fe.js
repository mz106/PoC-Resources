
import React from 'react'
import { NavLink } from "react-router-dom"

function Fe() {
    return (
        <div className="container--flex general__container">
        <h1>Frontend</h1>
        <ul className="general__ul">
            <li><a href="https://www.youtube.com/watch?v=o-nCM1857AQ" target="_blank" rel="noreferrer" rel="noopener">Why I love useReducer</a></li>
            <li><a href="https://www.youtube.com/watch?v=poQXNp9ItL4" target="_blank" rel="noreferrer" rel="noopener">Redux Tutorial</a></li>
            <li><a href="https://www.youtube.com/watch?v=agbh1wbfJt8" target="_blank" rel="noreferrer" rel="noopener">Typography</a></li>
        </ul>
        <NavLink to="/">Menu</NavLink>
    </div>
    )
}

export default Fe
