import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShopItemFunc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props

        return (
            <div className="container m-content">
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

/*  Я не смог разобраться с этой ошибкой, хотя код работает:
   * react-jsx-dev-runtime.development.js:87 
   * Warning: Failed prop type: Invalid prop `item` of type `Object`
   * supplied to `ShopItemFunc`, expected instance of `ShopItem`.
*/

  // Этот код всё равно выдал ошибку. Делаю проверку на основе объекта
// ShopItemFunc.propTypes = {
//     props: PropTypes.instanceOf(ItemModel).isRequired
// }

ShopItemFunc.propTypes = {
    item: PropTypes.shape({
        brand: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        descriptionFull: PropTypes.string,
        price: PropTypes.number,
        currency: PropTypes.string
    })
    }

export default ShopItemFunc;
