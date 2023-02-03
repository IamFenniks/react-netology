import React from "react";
import ULSimple from "../ULSimple";

let ListItem = props =>
    <li className={props.className}>{props.children}</li>

const Search = ({serchNav}) => {
    const bodyItem = serchNav.map(item => 
        <ListItem key={item} className="search-nav">{ item }</ListItem>);

    return (
        <div className="search">
            <div className="nav">
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

export default Search;