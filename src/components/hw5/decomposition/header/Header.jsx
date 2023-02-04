import React from "react";
import ADV from "./adv/ADV";
import News from "./news/News";
import PropTypes from "prop-types";

/**
 * Компонент отрисовывает Заголовок содержимого страницы.
 * 
 * @param {object} advContent - Выводит содержимое блока рекламы
 * @param {Array} currency - Выводит содержимое строки курса валют (заменил инфо по крипте)
 * @param {Array} newsHead - Выводит список кнопок (collapse) для изменения содержмиого списка новостей
 * @param {Array} newsList - Выводит список новостей
 * 
 * @returns {JSX.Object} - Возвращает (jsx-code) новостной блок и блок рекламмы
 */

const Header = ({advContent, currency, newsHead, newsList}) => {
// debugger
    return (
        <div className="deco-header">
            <News  currency={currency} newsHead={newsHead} newsList={newsList} />

            <ADV {...advContent} />
        </div>
    );
}

Header.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    advTitle: PropTypes.string.isRequired,
    advText: PropTypes.string.isRequired,

    curTitle: PropTypes.string.isRequired,
    curPrice: PropTypes.string.isRequired,
    curArrow: PropTypes.string.isRequired,

    newsHead: PropTypes.string.isRequired,

    svg: PropTypes.string.isRequired,
    newsText: PropTypes.string.isRequired
}

export default Header;