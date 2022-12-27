import React from "react";

const ShopItem = ({index, item}) => {
    // debugger;
    return (
        <div key={index} className="shop-item">
            <img src={item.img} className="item-img" alt={item.name} />
            <div className="item-name">{item.name}</div>
            <div className="item-color">{item.color}</div>
            <div className="item-price">${item.price}</div>
            <button className="item-to-cart">add to cart</button>
        </div>
    )
}

export default ShopItem;
