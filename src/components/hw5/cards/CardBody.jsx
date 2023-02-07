import React from "react";
 
const CardBody = props =>
    <div className={props.className}>
        { props.children }
    </div>

export default CardBody;