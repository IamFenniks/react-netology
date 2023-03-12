import React from "react";
import { Link, NavLink } from "react-router-dom";
import './../../../App.css';

const TopNav = () => {
    return (
        <div className="top_nav">
            <div><NavLink className="main-link" to="react-netology">React-Netology</NavLink></div>
            <div>Андрей Дарменко</div>
            <div>Приветсвую, друзья!</div>
        </div>
    );
}

export default TopNav;