import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';
import _ from 'lodash';

import { switchCase } from "./actions";


function SwitchCase(props) {

    const { switchCase } = props;

    const [alphaCase, setAlphaCase ] = useState('normal')

    const handleClick = (e) => {
        setAlphaCase(e.target.value);
        switchCase(e.target.value);
    };

    return (
        <div>
            <br />
            <input type="radio" id="lower" name="case" value="lower" 
            checked={alphaCase === 'lower'} onChange={handleClick}/>
            <label ><b>Lower Case</b></label>{'  '}

            <input type="radio" id="upper" name="case" value="upper" 
            checked={alphaCase === 'upper'} onChange={handleClick}/>
            <label ><b>Upper Case</b></label>{'  '}

            <input type="radio" id="normal" name="case" value="normal" 
            checked={alphaCase === 'normal'} onChange={handleClick}/>
            <label ><b>Normal Case</b></label><br /> <br /> <br />
        </div>
    );
}

export default connect(
    null,
    {
        switchCase
    }
)(SwitchCase);