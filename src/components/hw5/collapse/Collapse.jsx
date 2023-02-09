import React, { useState } from "react";
import BtnGroup from "./collapse-inner/CollapsedBtns";
import CollapsedText from "./collapse-inner/CollapsedText";

const Collapse = () => {
    const [nameLabel, setNameLabel] = useState('');

    const onSetName = (name) => {
        setNameLabel(name);
    }

    return (
        <div className="m-content">
            <h2>Collapse</h2>

            <div className="bd-example">
                <BtnGroup onSetName={onSetName} />
                <CollapsedText nameLabel={nameLabel} />
            </div>
        </div>
    );
};

export default Collapse;