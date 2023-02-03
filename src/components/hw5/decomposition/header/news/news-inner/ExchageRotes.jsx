import React from "react";

const List = props =>
    <ul>{props.children}</ul>

const ListItem = props =>
    <li>{props.children}</li>

const ExchageRotes = ({currency}) => {
    const listItems = currency.map(item => <ListItem key={item.curTitle}>{item.curTitle} {item.curPrice} <span>{item.curArrow}</span></ListItem>);
    
    return (
        <div className="exchange-rates">
            <List>
                {listItems}
            </List>
        </div>
    );
}

export default ExchageRotes;
