import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ link, name }) => {
    return (
        <div>&#x26C4; <Link to={link}>{ name }</Link></div>
    );
}

export default LinkItem;
