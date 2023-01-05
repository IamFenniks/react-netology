import React from "react";

const Typing = (props) => {
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><span className="online">&#9679;</span> Виктор</span>
                <span className="message-data-time">10:12</span>
            </div>
            <div className="">
                <span className="online">&#9679;</span>
                <span className="online 2">&#9679;</span>
                <span className="online 3">&#9679;</span>
            </div>
        </li>
    );
}

export default Typing;