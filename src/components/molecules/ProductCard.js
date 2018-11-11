import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText
} from 'reactstrap';

import Atc from './Atc';

class ProductCard extends PureComponent {

    constructor(){
        super();
        this.addOneItemToCart = this.addOneItemToCart.bind(this);
        this.removeOneItemFromCart = this.removeOneItemFromCart.bind(this);
    }
    addOneItemToCart(){
        this.props.onClickAddHandler(this.props.item);
    }
    removeOneItemFromCart(){
        this.props.onClickRemoveHandler(this.props.item);
    }
    render() {
        const { item, className } = this.props;
        return (
            <Card className={`text-center ${className}`} style={{maxWidth: 220, minWidth: 220, margin: '0 auto'}}>
                <CardImg top width="100%" src={item.image} alt={item.productName} />
                <CardBody>
                    <CardTitle className="small">{item.productName}</CardTitle>
                    <CardSubtitle>{item.brandName}</CardSubtitle>
                    <CardText className="small">{item.packaging}</CardText>
                    <CardText className="font-weight-bold">{item.price}</CardText>
                    <Atc 
                        count={item.qtyInCart}
                        onClickAddHandler={this.addOneItemToCart}
                        onClickRemoveHandler={this.removeOneItemFromCart} 
                        item={item} 
                        text="Add to cart" 
                    />
                </CardBody>
            </Card>
        );
    }
};

ProductCard.propTypes = {
    item: PropTypes.object.isRequired,
    className: PropTypes.string,
    onClickAddHandler: PropTypes.func.isRequired,
    onClickRemoveHandler: PropTypes.func.isRequired
};

export default ProductCard;