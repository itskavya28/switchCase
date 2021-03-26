import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import _ from 'lodash';

import { getAlphaCase } from "../components/switchCase/selector";
import { determineCase } from "../utils";

const LandingPage = (props) => {
    /**
     * Landing Page helps navigate to Page1 or Page2 
     */

    const { alphaCase } = props;
    const paragraph = 'Hello Welcome to React and Redux practice application. In this app we will learn about basics of React and Redux. HAPPY LEARNING!';

    const style = {
        paddingRight: '10px',
    };
    const H1 = {
        marginBottom: '30px',
        marginTop: '30px',
    };

    return (
        <div>
            <p id="intro" style={H1}>{determineCase(alphaCase,paragraph)}{'  '}
            </p>
            <div>
                <span style={style}>
                    <Link to="/page1">
                        <Button className="pointer" >{determineCase(alphaCase,'Page 1')}</Button>
                    </Link>
                </span>
                <span style={style}>
                    <Link to="/page2">
                        <Button className="pointer" >{determineCase(alphaCase,'Page 2')}</Button>
                    </Link>
                </span>
                <div>
                </div>
            </div>
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
)(LandingPage);