import React from 'react';
import PropTypes from 'prop-types';

const ShopItemFunc = (props) => {
    const { item } = props;

    return (
        <div className="container">
            <div className="background-element">
            </div>
            <div className="highlight-window">
                <div className="highlight-overlay"></div>
            </div>
            <div className="window">
                <div className="main-content">
                    <h2>{item.brand}</h2>
                    <h1>{item.title}</h1>
                    <h3>{item.description}</h3>
                    <div className="description">
                        {item.descriptionFull}
                    </div>
                    <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
                    <div className="divider"></div>
                    <div className="purchase-info">
                        <div className="price">{item.currency}{item.price}</div>
                        <button>Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

ShopItemFunc.propTypes = {
    item: PropTypes.object
}

export default ShopItemFunc;
