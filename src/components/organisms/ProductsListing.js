import React, { Component } from 'react';

import { Consumer } from '../../Consumer';
import ProductCard from '../molecules/ProductCard';

class ProductsListing extends Component {
    render() {
        const { context: { items, addOneItem, removeOneItem } } = this.props;
        return (
            items.map((item, idx) => (
                <ProductCard
                    key={idx}
                    className="col-xs-12 col-md-4 p-0 my-2"
                    onClickAddHandler={addOneItem}
                    onClickRemoveHandler={removeOneItem}
                    item={item}
                />
            ))
        );
    }
};

export default Consumer(ProductsListing);
