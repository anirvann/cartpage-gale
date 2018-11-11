import React, { Component, Fragment } from 'react';

import CartSummary from '../atoms/CartSummary';
import CartDetails from '../molecules/CartDetails';

class ProductsListing extends Component {
    render() {
        return (
            <Fragment>
                <h4 className="text-center">Your cart summary</h4>
                <CartSummary />
                <hr size="2" />
                <CartDetails />
            </Fragment>
        );
    }
};

export default ProductsListing;
