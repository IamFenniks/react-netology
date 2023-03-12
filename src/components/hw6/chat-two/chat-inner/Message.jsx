import React from "react";
import PropTypes from "prop-types";

const Message = ({ message, from, time }) => {
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><span className="online">&#9679;</span> {from}</span>
                <span className="message-data-time">{time}</span>
            </div>
            <div className="message my-message">
                { message }
            </div>
        </li>
    );
}

Message.propTypes = {
    message: PropTypes.object.isRequired,
    from: PropTypes.string.isRequired,
    // time: PropTypes.string.isRequired
}


export default Message;