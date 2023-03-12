import React from "react";
import Message from "./Message";
import Response from "./Response";

const MessageHistory = ({ list }) => {

    return (
        <ul>
             { list.map((item) => 
                sessionStorage.getItem('userId') === item.userId
                    ? <Message 
                        key={item.id} 
                        message={item.content}
                        from="Вы"
                        time={item.time}
                    />
                    : <Response 
                        key={item.id} 
                        message={item.content}
                        from="Гость"
                        time={item.time}
                    />
            ) } 
        </ul>
    );
}

export default MessageHistory;
