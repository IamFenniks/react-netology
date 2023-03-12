import React from "react";
import Message from "./Message";
import Response from "./Response";
// import Typing from "./messages/Typing";

const MessageHistory = ({ list }) => {
    debugger;
    return (
        <ul>
             { list.map((item) => 
                sessionStorage.getItem('userId') === item.userId
                    ? <Message 
                        key={item.id} 
                        message={item.content}
                        from="Вы"
                    />
                    : <Response 
                        key={item.id} 
                        message={item.content}
                        from="Гость"
                    />
                // ||
                // item.type === 'typing' && <Typing 
                //     key={item.id} 
                //     item={item}
                //     from={item.from}
                // />*/}
            ) } 
        </ul>
    );
}

export default MessageHistory;
