import React from "react";
 
const IconSwitch = ({ icon, onSwitch, title }) => {
    // debugger;
    return (
        <div className="store-header">
            <span className="material-icons" onClick={ onSwitch } title={title}>
                {icon}
            </span>
        </div>
    )
}

export default IconSwitch;