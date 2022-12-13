import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShopItemFunc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props

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
}

// Я специально создал локальный class "ShopItem", чтобы не плодить файлы
class ShopItem {
    constructor(brand, title, description, descriptionFull, currency, price) {
        this.props.brand = brand;
        this.props.title = title;
        this.props.description = description;
        this.props.descriptionFull = descriptionFull;
        this.props.currency = currency;
        this.props.price = price;
    }
}

/*  Я не смог разобраться с этой ошибкой, хотя код работает:
   * react-jsx-dev-runtime.development.js:87 
   * Warning: Failed prop type: Invalid prop `item` of type `Object`
   * supplied to `ShopItemFunc`, expected instance of `ShopItem`.
*/

ShopItemFunc.propTypes = {
    item: PropTypes.instanceOf(ShopItem).isRequired
}

export default ShopItemFunc;
