import React, { useEffect, useState } from "react"
import AlgoDataManager from "./dataManager/DataManager"
import AlgoStockJSX from "./JSX/AlgoStockJSX"
import AlphaDataManager from "../../AlphaVantageData/DataManager";

const AlgoPage = (props) => {

    const [ticker, setTicker] = useState([]);
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
        setTicker(results);
    })
}
const getAlphaData = evt => {
    evt.preventDefault();
    if(ticker === "")
    {
        window.alert("Please input a ticker");
    }
    else {
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
        })
    }
}

useEffect(() => {
    getAlgoData();
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
            { Object.entries(alphaData).length !== 0 ? <section className="border my-3 py-3">
                
                <h2>{alphaData["Meta Data"]["2. Symbol"]}</h2>
                 {
                     timeSeries.length != 0 ? timeSeries.map(element => <AlgoStockJSX key={element.id} info={element} /> ) : null
                }
            </section> : null}
        </>
    )
}

export default AlgoPage