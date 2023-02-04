import { nanoid } from "nanoid";
import React from "react";
import PropTypes from "prop-types";

/**
 * Блок дополнительной информации страницы
 * 
 * @param {array} infoBlocks - масссив объектов с данными по другой информации, включающий Заголовки блоков и саму информацию к ним 
 * @returns {JSX.Element} - Возвращает JSX-разметку
 */
const Info = ({infoBlocks}) => {
    return (
        <div className="info">
            <div className="info-blocks">
                { infoBlocks.map(block => 
                    <div key={nanoid()} className="block">
                        <h3>{block.infoTitle}</h3>
                        <ul>
                            {block.infoData.map((data) => 
                                data.img
                                ? <li key={nanoid()}>
                                    <img src={data.img} alt="IMG" />
                                    <span>{data.degrees}</span>
                                    <span>{data.prognoz}</span>
                                </li>
                                : <li key={nanoid()}>{data}</li>
                            )}
                        </ul>
                    </div>
                ) }
            </div>
        </div>
    );
}

Info.propTypes = {
    infoTitle: PropTypes.string.isRequired,
    infoData: PropTypes.array.isRequired,
    img: PropTypes.string.isRequired,
    degrees: PropTypes.string.isRequired,
    prognoz: PropTypes.string.isRequired
}

export default Info;