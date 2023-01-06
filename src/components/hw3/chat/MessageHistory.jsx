import React from "react";
import Message from "./messages/Message";
import Response from "./messages/Response";
import Typing from "./messages/Typing";

const MessageHistory = ({ list }) => {
    // debugger;
    return (
        <ul>
            { list.map((item) => 
                item.type === 'message' && <Message 
                    key={item.id} 
                    item={item}
                    from={item.from}
                /> ||
                item.type === 'response' && <Response 
                    key={item.id} 
                    item={item}
                    from={item.from}
                /> ||
                item.type === 'typing' && <Typing 
                    key={item.id} 
                    item={item}
                    from={item.from}
                />
            ) }
        </ul>
    );
}

export default MessageHistory;
