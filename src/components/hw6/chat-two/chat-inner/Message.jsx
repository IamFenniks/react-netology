import React from "react";
import PropTypes from "prop-types";

const Message = ({ message }) => {
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><span className="online">&#9679;</span> {}</span>
                <span className="message-data-time">{}</span>
            </div>
            <div className="message my-message">
                { message }
            </div>
        </li>
    );
}

Response.propTypes = {
    from: { name: PropTypes.object.isRequired },
    time: PropTypes.string.isRequired,
    text: PropTypes.string
}


export default Message;