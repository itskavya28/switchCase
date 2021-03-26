import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import RadioButton from "../components/radioButton";
import BootstrapTable from "react-bootstrap-table-next";


import { determineCase } from "../utils";
import { getAlphaCase } from "../components/switchCase/selector";

function Page2(props) {

    const columns = [
        {
            dataField: "id",
            text: "ID",
        },
        {
            dataField: "name",
            text: "Name",
            sort: true
        },
        {
            dataField: "email",
            text: "Email",
            sort: false
        },
        {
            dataField: "username",
            text: "Username",
            sort: false
        },
    ];

    const { alphaCase } = props;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);


    return (
        <div>
            <h2>{determineCase(alphaCase, 'You are in page 2')}</h2>
            <RadioButton /> {/** take radio buttons from radioButton component */}
            <br />
            { error ? <div>We have some error please reload after sometime</div> : null}
            { !isLoaded ? <div>Loading...</div> :
                <div>
                    <p>*Case specification will not be applied to table.</p>
                    <BootstrapTable
                        keyField="id"
                        data={items}
                        columns={columns}
                        striped
                        hover
                        condensed
                    />
                </div>
            }
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
)(Page2);