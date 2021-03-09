import React, { useEffect, useState } from "react"
import AlgoDataManager from "./dataManager/DataManager"
import AlgoStockJSX from "./JSX/AlgoStockJSX"
import AlphaDataManager from "../../AlphaVantageData/DataManager"


const AlgoPage = (props) => {

    const [ticker, setTicker] = useState([]);
    const [dbData, setDbData] = useState([])
    const [cash, setCash] = useState([]);
    const [newData, setNewData] = useState([]);
    const [alphaData, setAlphaData] = useState([]);
    const [timeSeries, setTimeSeries] = useState([]);

// BELOW HANDLES THE FIELD CHANGE INSIDE THE FORM
const handleFieldChange = evt => {
    const stateToChange = { ...newData };
    stateToChange[evt.target.id] = evt.target.value;
    setNewData(stateToChange);
};

const getAlgoData = () => {
    AlgoDataManager.getAll().then((results) => {
        setDbData(results);
        console.log(results)
    })
}
const getAlphaData = evt => {
    evt.preventDefault();
    if(ticker === "")
    {
        window.alert("Please input a ticker");
    }
    else {
      try {

      AlphaDataManager.getStock(newData).then((results) => {
           setAlphaData(results);
           for (const [key, value] of Object.entries(results)) {
            
            for (const [k, v] of Object.entries(value)) {
                
            if(typeof v == "object")
            {
                v.transTime = k.slice(k.length - 8, k.length - 1);
                 v.id = timeSeries.length + 1;
                timeSeries.push(v);
            }

            }

            }
       })
       if(!alphaData["Meta Data"]["2. Symbol"])
       {
        throw "error"
       }
    }
    catch(e)
    {
        window.alert("invalid ticker sybmol or must wait until API is ready")
    }
    }
}

const newTicker = evt => {
    evt.preventDefault();
    if(ticker === "")
    {
        window.alert("Please input a ticker");
    }
    else {
        AlgoDataManager.post(newData).then(() => {
            getAlgoData();
            console.log()
        })
    }
}

const cashChange = evt => {
    setCash(cash - 100);
}

const giveCash = () => {
 setCash(100000);
}

useEffect(() => {
    giveCash()
}, [])


    return (
        <>
            <h1>Algo Page</h1>
            <section className="border py-3">
            <form>
                <fieldset>
                    <div>
                        <label htmlFor="newData">Ticker</label>
                        <input id="ticker" type="text" required onChange={handleFieldChange}/>
                    </div>

                    <div>
                <button
                    type="button"
                    onClick={getAlphaData}
                >Submit</button>
            </div>
                </fieldset>
            </form>
            </section>
            <section className="container border my-3 py-3">
            <h2 className="my-2">Current Amount {cash}</h2>
            <button className="my-2" onClick={cashChange}>Click</button>
            <form className="my-2">
                <fieldset>
                    <div className="my-2">
                        <label htmlFor="newData">Buy</label>
                        <input id="buy" type="text" required onChange={handleFieldChange}/>
                    </div>
                    <div className="my-2">
                        <label htmlFor="newData">Sell</label>
                        <input id="sell" type="text" required onChange={handleFieldChange}/>
                    </div>

                    <div>
                <button
                    type="button"
                    onClick={newTicker}
                >Submit</button>
            </div>
                </fieldset>
            </form>
            { alphaData["Error Message"] != null ? 
                Object.entries(alphaData).length !== 0 || alphaData["Error Message"] == null ? <section className="border my-3 py-3">
                 {
                     timeSeries.length != 0 ? timeSeries.map(element => <AlgoStockJSX key={element.id} info={element} /> ) : null
                }
            </section> : null : null}
            </section>
        </>
    )
}

export default AlgoPage;