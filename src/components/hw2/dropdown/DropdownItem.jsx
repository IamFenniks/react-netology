import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownItem = ({ item }) => {
    const [active, setActive] = useState(false);

    return (
        <li className={active ? 'active' : ''} onClick={()=>{setActive(!active)}}><Link to="#">{ item }</Link></li>
    );
};

export default DropdownItem;