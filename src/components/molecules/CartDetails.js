import React, { Component } from 'react';

import { Consumer } from '../../Consumer';
import CartProduct from '../atoms/CartProduct';

class CartDetails extends Component {

    render() {
        const { context: { items, removeAllItem } } = this.props;
        return (
            items.filter(i => !!i.qtyInCart).length > 0 ? (
                <div className="d-flex flex-wrap text-center">
                    <span className="w-25">Item</span>
                    <span className="w-25">Quantity</span>
                    <span className="w-25">Total Rs.</span>
                    <span className="w-25"></span>

                    {items.map((item, idx) => (
                        item.qtyInCart > 0 ?
                            <CartProduct
                                key={idx}
                                item={item}
                                removeAllHandler={() => { removeAllItem(item) }}
                            /> : null
                    ))}
                </div>
            ) : null
        );
    }
};

export default Consumer(CartDetails);