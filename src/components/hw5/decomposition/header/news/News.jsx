import React from "react";
import ULSimple from "../../ULSimple";
import ExchageRotes from "./news-inner/ExchageRotes";
import PropTypes from "prop-types";

/**
 * 
 * @param {string} props.className - Строка с названием CSS класса HTML-блока 
 * @param {JSX.Element} props.children - Строка с названием CSS класса HTML-блока 
 * 
 * @returns {jsx } - Возвращает содержимое новостного блока (Header & Body)
 */
let CollapsBar = props =>
    <div className={props.className}> {props.children}</div>

/**
 * 
 * @param {string} props.className - Строка с названием CSS класса HTML-блока 
 * @param {JSX.Element} props.children - Строка с названием CSS класса HTML-блока 
 * 
 * @returns {jsx } - Возвращает содержимое новостного блока (Body)
 */  
let BarBody = props =>
    <div className={props.className}>{props.children}</div>

/**
 * 
 * @param {Array} currency - Выводит содержимое строки курса валют (заменил инфо по крипте)
 * @param {Array} newsHead - Выводит список кнопок (collapse) для изменения содержмиого списка новостей
 * @param {Array} newsList - Выводит список новостей
 * 
 * @returns {jsx } - Возвращает содержимое новостного блока (Header & Body) а так же дочерний компонент блока валют (ExchageRotes)
 */
const News = ({currency, newsHead, newsList}) => {
    const bodyItem = newsList.map((item, index) => 
        <BarBody key={index} className="bar-body">
            <p>
               <img src={item.svg} alt={item.newsText} /> 
               <span>{item.newsText}</span>
            </p> 
        </BarBody>)

    return (
        <div className="news">
            <CollapsBar className="collaps-bar">
                <ULSimple navList={newsHead} />

                <div>{ bodyItem }</div>
            </CollapsBar>
            
            <ExchageRotes currency={currency} />
        </div>
    );
}

News.propTypes = {
    curTitle: PropTypes.string.isRequired,
    curPrice: PropTypes.string.isRequired,
    curArrow: PropTypes.string.isRequired,

    newsHead: PropTypes.string.isRequired,

    svg: PropTypes.string.isRequired,
    newsText: PropTypes.string.isRequired
}

export default News;