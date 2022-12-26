import React from "react";
import ShopCard from "./cards/ShopCard";

const CardsView = ({ cards }) => {
    return (
        <div className="cards-view">
            { cards.map((c, index) => <ShopCard key={index} card={c} />) }
        </div>
    );
}

export default CardsView;