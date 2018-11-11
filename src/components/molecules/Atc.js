import React, { Component, Fragment } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';

class Atc extends Component {

    render() {
        const { count, onClickAddHandler, onClickRemoveHandler, text } = this.props;
        return (
            <Fragment>
                <ButtonGroup>
                    {(count > 0 ?
                        <Button
                            onClick={onClickRemoveHandler}
                            color="info"
                            aria-label="Remove one item"
                        >-</Button>
                        : null
                    )}
                    <Button
                        onClick={onClickAddHandler}
                        color="info"
                        disabled={count > 0}
                    >{count === 0? text : `${count} in cart`}</Button>
                    {(count > 0 ?
                        <Button
                            onClick={onClickAddHandler}
                            color="info"
                            aria-label="Add one item"                            
                        >+</Button>
                        : null
                    )}
                </ButtonGroup>
            </Fragment>
        );
    }
};

Atc.propTypes = {
    count: PropTypes.number.isRequired,
    onClickAddHandler: PropTypes.func.isRequired,
    onClickRemoveHandler: PropTypes.func.isRequired,
    text: PropTypes.string
};

export default Atc;
