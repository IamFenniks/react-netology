import React from "react";
import Message from "./messages/Message";
import Response from "./messages/Response";
import Typing from "./messages/Typing";
import PropTypes from "prop-types";

const MessageHistory = ({ list }) => {
    return (
        <ul>
            <Response from={list.from} message={list} />
            <Message from={list.from} message={list} />
            <Typing from={list.from} message={list} />
        </ul>
    );
}

MessageHistory.propTypes = {
    id: PropTypes.string.isRequired,
    from: { name: PropTypes.object.isRequired },
    type: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default MessageHistory;
