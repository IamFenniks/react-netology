import React from "react";
import DropdownItem from "./DropdownItem";

const DropdownList = ({ list }) => {
    return (
        <ul data-id="dropdown" className="dropdown">
            { list.map(item=> <DropdownItem key={item} item={ item } /> )}
        </ul>
    );
}

export default DropdownList