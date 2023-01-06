import React from "react";
import PropTypes from "prop-types";

const Typing = ({ item, from }) => {
    
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><span className="online">&#9679;</span> {from.name}</span>
                <span className="message-data-time">{item.time}</span>
            </div>
            <div>
                
            </div>
            
                { item.text
                    ? <div className="message my-message">{item.text}</div>
                    : <div className="">
                        <span className="online">&#9679;</span>
                        <span className="online 2">&#9679;</span>
                        <span className="online 3">&#9679;</span>
                    </div>
                }
            
        </li>
    );
}

Response.propTypes = {
    from: { name: PropTypes.object.isRequired },
    time: PropTypes.string.isRequired,
    text: PropTypes.string
}


export default Typing;