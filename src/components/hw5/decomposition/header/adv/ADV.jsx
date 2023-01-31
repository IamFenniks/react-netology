import React from "react";

const ADV = (props) => {
    return (
        <div className="adv">
            <img src={props.imgSrc} alt={props.advTitle} />
            <h3>{props.advTitle}</h3>
            <p>{props.advText}</p>
        </div>
    );
}

export default ADV;