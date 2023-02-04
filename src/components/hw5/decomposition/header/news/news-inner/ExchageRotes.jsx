import React from "react";
import PropTypes from "prop-types";

const List = props =>
    <ul>{props.children}</ul>

const ListItem = props =>
    <li>{props.children}</li>

/**
 * 
 * UI Компонент "Строка курса валют" 
 * 
 * @param {object} currency - Объект с данными по курсу валют 
 * @returns {JSX.Element} - Возвращает JSX разметку
 */
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

ExchageRotes.propTypes = {
    curTitle: PropTypes.string.isRequired,
    curPrice: PropTypes.string.isRequired,
    curArrow: PropTypes.string.isRequired
}

export default ExchageRotes;
