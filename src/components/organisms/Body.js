import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import ProductsListing from './ProductsListing';
import Cart from './Cart';

class Header extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs="12" md="8" className="d-flex flex-wrap">
                        <ProductsListing />                                            
                    </Col>
                    <Col xs="12" md="4">
                        <Cart />                                            
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Header;
