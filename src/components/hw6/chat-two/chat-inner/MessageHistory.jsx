import React from "react";
import Message from "./Message";
// import Response from "./messages/Response";
// import Typing from "./messages/Typing";

const MessageHistory = ({ list }) => {
    debugger;
    return (
        <ul>
             { list.map((item) => 
                <Message 
                    key={item.id} 
                    message={item.content}
                />
                
                // item.type === 'response' && <Response 
                //     key={item.id} 
                //     item={item}
                //     from={item.from}
                // /> ||
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
