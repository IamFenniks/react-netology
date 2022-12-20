import React from "react";
import { Link } from "react-router-dom";
import './../../../App.css';

const TopNav = () => {
    return (
        <div className="top_nav">
            <nav>
                <div><Link to='shopitem'>Карточка товара</Link></div>
                <div><Link to='calendar'>Календарь</Link></div>
                <div><Link to='portfolio'>Портфолио</Link></div>
            </nav>
        </div>
    );
}

export default TopNav;