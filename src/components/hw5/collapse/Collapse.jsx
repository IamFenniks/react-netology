import React from "react";
import BtnGroup from "./collapse-inner/CollapsedBtns";
import CollapsedText from "./collapse-inner/CollapsedText";

const expandedLabel = false;


const Collapse = () => {
    return (
        <div className="m-content">
            <h2>Collapse</h2>

            <div className="bd-example">
                <BtnGroup />
                <CollapsedText expandedLabel={expandedLabel} />
            </div>
        </div>
    );
};

export default Collapse;