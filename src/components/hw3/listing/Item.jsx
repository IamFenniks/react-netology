import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Item = ({ url, img_url, title, price, currency_code, quantity }) => {
// debugger;
    return (
        <div className="item">
            <div className="item-image">
                <Link href={url}>
                    <img src={img_url} alt={url} />
                </Link>
            </div>
            <div className="item-details">
                <p className="item-title">{ title }</p>
                <p className="item-price-3_2">${ price }</p>
                <p className="item-quantity level-medium">{ quantity } left</p>
            </div>
        </div>
    );
}

Item.protoTypes = {
    url          : PropTypes.string,
    img_url      : PropTypes.string,
    title        : PropTypes.string,
    currency_code: PropTypes.string,
    price        : PropTypes.string,
    currency_code: PropTypes.string,
    quantity     : PropTypes.number
}

export default Item;
