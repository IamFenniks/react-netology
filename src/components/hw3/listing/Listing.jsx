import React from "react";
import { Link } from "react-router-dom";
import jsonData from './../../../data/etsy.json';

const Listing = () => {
    const parsedData = JSON.parse(JSON.stringify(jsonData));
    // console.log(parsedData);
    const items = [];

    for(let i=0; i<parsedData.length; i++) {
        if (Object.hasOwn(parsedData[i], 'MainImage')) {
            items.push({
                id: parsedData[i].listing_id,
                url: parsedData[i].url,
                img: parsedData[i].MainImage.url_570xN,
                title: parsedData[i].title,
                price: parsedData[i].price,
                currency_code: parsedData[i].currency_code,
                quantity: parsedData[i].quantity,
            });
        }
    }
    // console.log(items);
    const tieleFifty = (title) => {
        return title.length > 50 ? title.substring(0, 50) + "..." : title
    }
    const currFormat = (currency) => {
        let us = '';
        if(currency === 'USD') {
            const options = { style: 'currency', currency: "USD" };
            us = new Intl.NumberFormat("en-US", options).format(1);
        }else if(currency === 'EUR') {
            const options = { style: 'currency', currency: "EUR" };
            us = new Intl.NumberFormat("en-US", options).format(1);
        };
        return us;
    }
    
    return (
        <div className="m-content">
            <div className="item-list">
                { items.map(item => {
                    return (
                        <div key={item.id} className="item">
                            <div className="item-image">
                                <Link href={ item.url }>
                                    <img 
                                        src={ item.img } 
                                        alt={ tieleFifty(item.title) } 
                                    />
                                </Link>
                            </div>
                            <div className="item-details">
                                <p className="item-title">
                                    { tieleFifty(item.title) }
                                </p>
                                {item.currency_code === 'USD' || item.currency_code === 'EUR'
                                    ? <p className="item-price-3_2">{currFormat(item.currency_code)}{item.price}</p>
                                    : <p className="item-price-3_2">{item.price}{item.currency_code}</p>
                                }
                                
                                <p className={
                                    "item-quantity " 
                                    +  (item.quantity <= 10 && "level-low"
                                    || item.quantity > 10 && item.quantity <=20 && "level-medium"
                                    || item.quantity > 20 && "level-high") 
                                }>
                                    {item.quantity + " "} 
                                     left
                                </p>
                            </div>
                        </div>
                    );
                }) }
            </div>
        </div>
    );
}

// Listing.defaultProps = {
//     items: []
// }

export default Listing;
