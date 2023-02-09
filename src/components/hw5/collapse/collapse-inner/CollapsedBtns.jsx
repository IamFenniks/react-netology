import React from "react";

const CollapsedBtns = ({handlExpand, collapsedLabel}) => {
    const handlExpand = () => {
        handlExpand = true;
    }
    
    const handleCollaps = () => {
        collapsedLabel = false;
    }
    
    return (
        <p>
            <a className="btn btn-primary" 
                href="#"
                onClick={handlExpand}
            >
                Развернуть
            </a>
            <button className="btn btn-primary"
                onClick={handleCollaps}
            >
                Свернуть текст
            </button>
        </p>
    );
}

export default CollapsedBtns;