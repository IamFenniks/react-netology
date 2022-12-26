import React from "react";

const ShopCard = ({key, card}) => {
    // debugger;
    return (
        <div key={key} className="shop-card">
            <div className="card-name">{card.name}</div>
            <div className="card-price">${card.price}</div>
            <div className="card-color">{card.color}</div>
            <button className="add-to-cart">add to cart</button>
            <img src={card.img} className="card-img" alt={card.name} />
        </div>
    )
}

export default ShopCard;
