import React from "react";
import PropTypes from 'prop-types';
// import ShopModel from "./ShopModel";

const ShopCard = ({index, card}) => {
    // debugger;
    return (
        <div key={index} className="shop-card">
            <div className="card-name">{card.name}</div>
            <div className="card-price">${card.price}</div>
            <div className="card-color">{card.color}</div>
            <button className="add-to-cart">add to cart</button>
            <img src={card.img} className="card-img" alt={card.name} />
        </div>
    )
}

// ShopCard.propTypes={card:PropTypes.instanceOf(ShopModel).isRequired}

export default ShopCard;
