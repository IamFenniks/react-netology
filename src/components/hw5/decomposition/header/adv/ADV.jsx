import React from "react";
import advImg from "./../../../../../img/adv.jpg"

const ADV = (props) => {
    return (
        <div className="adv">
            <img src={advImg} alt={props.advTitle} />
            <h3>{props.advTitle}</h3>
            <p>{props.advText}</p>
        </div>
    );
}

export default ADV;