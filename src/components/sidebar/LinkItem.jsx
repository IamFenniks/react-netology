import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ menu }) => {
    const {link, linkName} = menu;
    debugger;
    return (
        <div>&#x26C4; <Link to={link}>{ linkName }</Link></div>
    );
}

export default LinkItem;
