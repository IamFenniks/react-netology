import React from "react";
import PropTypes from "prop-types";

const Response = ({ item, from }) => { 
    // debugger;
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{item.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>
                <span className="online">&#9679;</span>
            </div>
            <div className="message other-message float-right">
                { item.text && item.text }
            </div>
        </li>
    );
}

Response.propTypes = {
    from: { name: PropTypes.object.isRequired },
    time: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default Response;