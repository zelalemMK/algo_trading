import React from "react";
const HomeJSX = (props) => {
    console.log(props)
    console.log(props.e["1. open"])
    console.log(props.e["2. high"])
    console.log(props.e["3. low"])
    console.log(props.e["4. close"])
    console.log("asd" + props.e["5. volume"])
    
     

    return (
        <>
        <h2>Open: {props.e["1. open"]}</h2>
        <h2>High: {props.e["2. high"]}</h2>
        <h2>Low: {props.e["3. low"]}</h2>
        <h2>Close: {props.e["4. close"]}</h2>
        <h2>Volume: {props.e["5. volume"]}</h2>
        </>
    )
}

export default HomeJSX;
