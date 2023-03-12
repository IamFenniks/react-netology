import React from "react";
import { NavLink } from "react-router-dom";

const LinkItem = ({ link, name, className }) => {
    return (
        <div>&#x26C4; <NavLink className={className} to={link}>{ name }</NavLink></div>
    );
}

export default LinkItem;
