import React from 'react'
import { NavLink } from "react-router-dom";

const NavButton = (props) => {
    return (
        <li className="nav-item">
            <NavLink
                to={props.link}
                className={({ isActive }) => "nav-link " + (isActive ? "text-secondary" : "")}
            >
                {props.name}
            </NavLink>
        </li>
    )
}

export default NavButton
