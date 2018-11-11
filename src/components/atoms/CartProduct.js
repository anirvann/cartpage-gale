import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

class CartProduct extends Component {

    render() {
        const { item, removeAllHandler } = this.props;
        return (
            <div className="d-flex w-100 align-items-center mb-1">
                <span className="w-25 small">{`${item.brandName} ${item.productName}`}</span>
                <span className="w-25">{item.qtyInCart}</span>
                <span className="w-25">{item.qtyInCart * item.price}</span>
                <Button
                    onClick={removeAllHandler}
                    color="info"
                >remove</Button>
            </div>
        );
    }
};

CartProduct.propTypes = {
    item: PropTypes.object.isRequired,
    removeAllHandler: PropTypes.func.isRequired
};

export default CartProduct;