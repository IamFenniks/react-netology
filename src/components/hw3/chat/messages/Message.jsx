import React from "react";

const Message = (props) => {
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><span className="online">&#9679;</span> Виктор</span>
                <span className="message-data-time">10:12</span>
            </div>
            <div className="message my-message">
                Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.
            </div>
        </li>
    );
}

export default Message;