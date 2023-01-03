import React from "react";
import jsonData from './../../../data/etsy.json';
import Item from "./Item";

    const loadData = JSON.stringify(jsonData);
    const parsedData = JSON.parse(loadData);
    // console.log(parsedData);

const Listing = () => {

    return (
        <div className="m-content">
            <div className="item-list">
                { 
                    Object.keys(parsedData).map(item => {
                        parsedData[item].MainImage.map((i) => {
                            return (
                            <Item 
                                key={item.listing_id} 
                                url={ item.url } 
                                img_url={item.url_570xN}
                                title={item.title}
                                price={item.price}
                                currency_code={item.currency_code}
                                quantity={item.quantity}
                            />
                        )
                        })
                    }
                    ) 
                }
            </div>
        </div>
    );
}

export default Listing;
