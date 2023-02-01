import React from "react";
import bunner from './../../../../img/bunner.jpg'

const Bunner = (props) => {
    return (
        <div className="bunner">
            <div className="bun-img">
                <img src={bunner} alt="" />
            </div>
        </div>
    );
}

export default Bunner;