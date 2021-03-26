import React, { useState } from 'react';
import { connect } from 'react-redux';

import { determineCase } from "../utils";
import { getAlphaCase } from "./switchCase/selector";

const TextBoxButton = (props) => {
    const { alphaCase } = props;

    const [state, setState ] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        setState(determineCase(alphaCase,'Hello Welcome, you clicked from button owned by text-box component'))
    };

    return (
        <div>
            <input
                type="text"
                id="input1"
                readOnly
                value={state}
            /> 
            {' '}
            <button
                type="button"
                onClick={handleClick}>
                {determineCase(alphaCase,'Click Me')}
        </button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        alphaCase: getAlphaCase(state).case
    };
};

export default connect(
    mapStateToProps
)(TextBoxButton);