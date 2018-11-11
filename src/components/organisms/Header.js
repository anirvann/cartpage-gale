import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

import { Consumer } from '../../Consumer';

class Header extends Component {

    shouldComponentUpdate(nextProps) {
        return this.props.context.items.length !== nextProps.context.items.length;
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Masala & Spices</NavbarBrand>
                    <span>{this.props.context.items.length} items</span>
                </Navbar>
            </div>
        );
    }
};

export default Consumer(Header);