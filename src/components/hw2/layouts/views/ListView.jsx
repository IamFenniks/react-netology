import React from "react";
import ShopItem from "./cards/ShopItem";

const ListView = ({ items }) => {
    // debugger;
    return (
        <div className="list-view">
            { items.map((i, index) => <ShopItem key={index} item={i} />) }
        </div>
    );
}

export default ListView;