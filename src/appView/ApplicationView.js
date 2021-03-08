import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";



//AlgoPage
import AlgoPage from "../components/algoPage/AlgoPage"; 




const ApplicationView = (props) => {

    return (
        <React.Fragment>

            <Route
                exact
                path="/"
                render={props => {
                    return <AlgoPage {...props}  />
                }}
            />

        </React.Fragment>
    )

}

export default ApplicationView;





