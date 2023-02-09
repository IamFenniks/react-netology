import React from "react";

const CollapsedBtns = ({ onSetName }) => {
    const handlExpand = (e) => {
        e.preventDefault();
        let name = e.target.name;
        onSetName(name);
    }
    
    const handleCollaps = (e) => {
        e.preventDefault();
        let name = e.target.name;
        onSetName(name);
    }
    
    return (
        <p>
            <a className="btn btn-primary" 
                href="#"
                onClick={handlExpand}
                name="expandedLabel"
            >
                Развернуть
            </a>
            <button className="btn btn-primary"
                onClick={handleCollaps}
                name="collapsedLabel"
            >
                Свернуть текст
            </button>
        </p>
    );
}

export default CollapsedBtns;