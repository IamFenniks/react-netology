import React from "react";

const ULSimple = props => {
    const headItem = newsHead.map(item => 
        <ListItem className="bar-head">{ item }</ListItem>)

    return (
        <ul>{props.children}</ul>
    );
}

export default ULSimple;