import React from 'react'
import "./NavbarStyles.css";
import { MenuItems } from './MenuItems';
import { components } from 'react';
//import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="NavbarItems">
            <h1 className="Navbar-logo">Trippy</h1>
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName}href="/">
                                <i className={item.icon}></i>{item.title}</a>
                        </li>
                    )
                })}
                
                    <button>Sign Up</button>
            </ul>
        </nav>
    )

}
export default Navbar;