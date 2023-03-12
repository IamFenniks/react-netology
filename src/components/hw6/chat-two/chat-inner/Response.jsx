import React from "react";
import PropTypes from "prop-types";

const Response = ({ message, from, time }) => { 
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from}</span>
                <span className="online">&#9679;</span>
            </div>
            <div className="message other-message float-right">
                { message }
            </div>
        </li>
    );
}

Response.propTypes = {
    message: PropTypes.object.isRequired,
    from: PropTypes.string.isRequired,
    // time: PropTypes.string.isRequired
}

export default Response;