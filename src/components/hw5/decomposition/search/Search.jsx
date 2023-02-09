import React from "react";
import PropTypes from "prop-types";
import ULSimple from "../ULSimple";

let ListItem = props =>
    <li className={props.className}>{props.children}</li>

/**
 * Блок ввода поисковых запросов Яндекс-search 
 * 
 * @param {array} serchNav - Список кнопок переключения блоков по поисковым запросам 
 * @returns {JSX.Element} - Возвращает JSX-разметку
 */
const Search = ({serchNav}) => {
    const bodyItem = serchNav.map(item => 
        <ListItem key={item} className="search-nav">{ item }</ListItem>);

    return (
        <div className="search">
            <div className="nav">
                {/* <ULSimple navList={bodyItem} /> */}
                <ul>{bodyItem}</ul>
            </div> 

            <div className="input">
                <a href="https://ya.ru"><span>Я</span>ндекс</a>
                <label htmlFor="">
                    <input />
                    <button>Найти</button>
                </label>
            </div>
            
            <div className="hint">
                <p>Найдётся всё. Например, <span>фаза луны сегодня</span></p>
            </div>
        </div>
    );
}

Search.propTypes = {
    serchNav: PropTypes.array.isRequired
}

export default Search;