import React from "react";
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";

import TextBoxButton from "../components/textBoxButton";
import { determineCase } from "../utils";
import { getAlphaCase } from "../components/switchCase/selector";


function Page1(props){

    const { alphaCase } = props;

    const handleClick = (e) => {
        e.preventDefault();
        alert(determineCase(alphaCase,'You click from button owned by page 1'));
    }

    return(
        <div>
            <h2>{determineCase(alphaCase,'You are in page 1')}</h2>
            <TextBoxButton /> {/** take Text box and button from textBoxButton component */}
            <br />
            <Button 
                type="button"
                onClick={handleClick}>
                   { determineCase(alphaCase,'Page1 Button')}
            </Button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        alphaCase: getAlphaCase(state).case
    };
};

export default connect(
    mapStateToProps
)(Page1);