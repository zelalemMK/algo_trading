import React from "react";

const StockInfoJSX = (props) => {
return (
    <>
<section style = "border-style: solid;">
    <h2>{props.open}</h2>
    <h2>{props.high}</h2>
    <h2>{props.low}</h2>
    <h2>{props.close}</h2>
    <h2>{props.volume}</h2>
</section>
    </>
)
}

export default StockInfoJSX;