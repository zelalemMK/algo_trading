import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

//Components

//AlgoPage
import AlgoPage from "../components/algoPage/AlgoPage"; 

//Home
import Home from "../components/home/Home"; 


//Market Research
import History from "../components/marketResearch/MarketResearch";


const ApplicationView = (props) => {

    return (
        <React.Fragment>

            <Route
                exact
                path="/"
                render={props => {
                    return <Home {...props} />
                }}
            />

            <Route
                exact
                path="/History"
                render={props => {
                    return <History {...props} />
                }}
            />


            <Route
                exact
                path="/Algo"
                render={props => {
                    return <AlgoPage {...props} />
                }}
            />


        </React.Fragment>
    )

}

export default ApplicationView;





