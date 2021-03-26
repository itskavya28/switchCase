import React, { useState } from 'react';

import { connect } from 'react-redux';

import { determineCase } from "../utils";
import { getAlphaCase } from "./switchCase/selector";

function RadioButton(props) {

    const { alphaCase } = props;

    const [radioState, setRadioState ] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setRadioState(e.target.value)
        alert('you selected '+ e.target.value);
    }

    return (
        <div>
            <p>{determineCase('Radio button from - radioButton component')}</p>

            <input type="radio" id="option1" name="options" value="option1" checked={radioState === 'option1'} onChange={handleChange} />
            <label>{determineCase(alphaCase,'Option 1')}</label>
            {' '}
            <input type="radio" id="option2" name="options" value="option2"  checked={radioState === 'option2'} onChange={handleChange} />
            <label>{determineCase(alphaCase,'Option 2')}</label>
            <br />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        alphaCase: getAlphaCase(state).case
    };
};

export default connect(
    mapStateToProps
)(RadioButton);
