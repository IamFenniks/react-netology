import React, { useState } from "react";
import DropdownList from "./DropdownList ";

const initialState = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out'
]

const Dropdown = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className="m-content">
            <div className="dropdown-container">
                <div className={"dropdown-wrapper " + (toggle ? "open" : "")}>
                        <div className="dd-btn" onClick={handleToggle}>
                            <span>Account Settings</span>
                            <i className="material-icons">public</i>
                        </div> 
                        
                        <DropdownList list={ initialState } />
                    </div>
            </div>
        </div>
    )
}

export default Dropdown;
