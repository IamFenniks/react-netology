import React from "react";

const Response = (props) => {
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">10:10</span> &nbsp; &nbsp;
                <span className="message-data-name">Ольга</span>
                <span className="online">&#9679;</span>
            </div>
            <div className="message other-message float-right">
                Привет, Виктор. Как дела? Как идёт работа над проектом?
            </div>
        </li>
    );
}

export default Response;