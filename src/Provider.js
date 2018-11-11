import React, { Component } from 'react';

const DEFAULT_STATE = {
    items: []
};

export const Context = React.createContext(DEFAULT_STATE);

export default class Provider extends Component {

    constructor() {
        super();
        this.state = DEFAULT_STATE;
    }

    componentWillMount() {
        fetch('https://cartservice-40668.firebaseapp.com/cart')
            .then(response => response.json())
            .then(data => this.setState({
                items: data.products.map(item => ({ ...item, ...{ qtyInCart: 0 } }))
            }));
    }

    cartQtyChange(item, action) {
        let modifiedItem = {};
        switch (action) {
            case 'INCREMENT':
                modifiedItem = { ...item, ...{ qtyInCart: item.qtyInCart + 1 } };
                break;
            case 'DECREMENT':
                modifiedItem = { ...item, ...{ qtyInCart: item.qtyInCart - 1 } };
                break;
            case 'REMOVEALL':
                modifiedItem = { ...item, ...{ qtyInCart: 0 } };         
                break;       
            default:
                break;
        }
        return this.state.items.map(cartItem => { return cartItem.id === item.id ? modifiedItem : cartItem });        
    }

    addItemToCart = item => {
        this.setState({ items: this.cartQtyChange(item, 'INCREMENT') });
    }
    removeItemFromCart = item => {
        this.setState({ items: this.cartQtyChange(item, 'DECREMENT') });
    }
    removeAllItemsFromCart = item => {
        this.setState({ items: this.cartQtyChange(item, 'REMOVEALL') });
    }

    render() {
        return (
            <Context.Provider
                value={{
                    ...this.state,
                    addOneItem: this.addItemToCart,
                    removeOneItem: this.removeItemFromCart,
                    removeAllItem: this.removeAllItemsFromCart
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
};
