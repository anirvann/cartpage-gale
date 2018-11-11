import React from 'react';

import { Context } from './Provider';

export function Consumer(Component) {
    return function WrapperComponent(props) {
        return (
            <Context.Consumer>
                {state => <Component {...props} context={state} />}
            </Context.Consumer>
        );
    };
}