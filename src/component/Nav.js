import React from 'react';
import "./Nav.css";
const Nav = () => {
    return (
        <div className="navbar">
            <div className="contanier">
                <a href="#" className="logo">Logo</a>
                <ul class="list-group">
                    <a href="/">Home</a>
                    <a href="/About">About</a>
                </ul>
            </div>
        </div>
    )
}
export default Nav;