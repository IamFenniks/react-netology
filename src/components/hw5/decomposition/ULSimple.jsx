import React from "react";

let ListItem = props =>
    <li className={props.className}>{props.children}</li>

const ULSimple = ({navList}) => {
    const headItem = navList.map(item => 
        <ListItem key={item} className="bar-head">{ item }</ListItem>);

    return (
        <ul>{headItem}</ul>
    );
}

export default ULSimple;