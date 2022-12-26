import React from "react";
import { Link } from "react-router-dom";
import './../../App.css';

const SideNav = () => {
    return (
        <div className="side_nav">
            <nav>
                <div>&#x26C4; <Link to='shopitem'>Карточка товара</Link></div>
                <div>&#x26C4; <Link to='calendar'>Календарь</Link></div>
                <div>&#x26C4; <Link to='portfolio'>Портфолио</Link></div>
                <div>&#x26C4; <Link to='store'>Магазин</Link></div>
            </nav>
        </div>
    );
}

export default SideNav;