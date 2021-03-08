import React from "react"

const AlgoStockJSX = props => {

        console.log(props)

    return(
    <>
    <div className="container border my-3 py-3">
        <h8 className="px-3">Time: {props.info.transTime}</h8>
        <h8 className="px-3">Open: {props.info["1. open"]}</h8>
        <h8 className="px-3">High: {props.info["2. high"]}</h8>
        <h8 className="px-3">Low: {props.info["3. low"]}</h8>
        <h8 className="px-3">Close: {props.info["4. close"]}</h8>
        <h8 className="px-3">Volume: {props.info["5. volume"]}</h8>
    </div>
    </>)
}

export default AlgoStockJSX