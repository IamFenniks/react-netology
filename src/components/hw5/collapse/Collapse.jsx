import React from "react";
import BtnGroup from "./collapse-inner/BtnGroup";
import CollapsedText from "./collapse-inner/CollapsedText";

const Collapse = () => {
    return (
        <div className="m-content">
            <h2>Collapse</h2>

            <div class="bd-example">
                <BtnGroup />
                <CollapsedText />
            </div>
        </div>
    );
};

export default Collapse;