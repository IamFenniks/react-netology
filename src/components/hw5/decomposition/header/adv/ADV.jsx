import React from "react";
import advImg from "./../../../../../img/adv.jpg";
import PropTypes from "prop-types";

/**
 * UI Компонент рекламного блока
 * 
 * @param {object} props - объект содержащий данные по рекламному блолку
 * @returns {JSX.Element} - Возвращает JSX-разметку рекламного блока
 */
const ADV = (props) => {
    return (
        <div className="adv">
            <img src={advImg} alt={props.advTitle} />
            <h3>{props.advTitle}</h3>
            <p>{props.advText}</p>
        </div>
    );
}

ADV.propTypes = {
    advTitle: PropTypes.string.isRequired,
    advText: PropTypes.string.isRequired,
}

export default ADV;