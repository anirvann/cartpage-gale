import React, { Component } from 'react';

import { Consumer } from '../../Consumer';

class CartSummary extends Component {
    render() {
        const { context: { items } } = this.props;
        return (
            <div className="d-flex flex-wrap text-center">
                <span className="w-50">Items in cart</span>
                <span className="w-50">Total Rs.</span>
                <span className="w-50 font-weight-bold">{items.reduce((acc, item) => item.qtyInCart + acc, 0)}</span>
                <span className="w-50 font-weight-bold">{items.reduce((acc, item) => (item.price * item.qtyInCart) + acc, 0)}</span>
            </div>
        );
    }
};

export default Consumer(CartSummary);