import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
    return (
        <div className="navbar">
            <div className="contanier">
                <a href="#" className="logo">Logo</a>
                <ul class="list-group">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Blog">Blog</NavLink>
                </ul>
            </div>
        </div>
    )
}
export default Nav;