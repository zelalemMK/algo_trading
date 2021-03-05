import React, { useEffect, useState } from "react"
import HomeJSX from "./JSX/HomeJSX"
import HomeManager from "./dataManager/DataManager"

const Home = (props) => {

    const [Alpha, setAlpha] = useState([]);
    const [TimeStamp, setTimeStamp] = useState([]);
    const [Stock, setStock] = useState([]);
    console.log(typeof TimeStamp)

    let i = 0;
    const getStockData = () => {
        HomeManager.getAll().then((results) => {
            setAlpha(results);

            for (const [key, value] of Object.entries(results)) {
                if(key.startsWith("Meta"))
                {
                    setStock(value);
                }
                else
                {
                     for (const [key1, value1] of Object.entries(value)) {
                        TimeStamp.push(value1)
                    }
                   
                }
              }
              console.log(TimeStamp)
        })
    }

    useEffect(() => {
        getStockData();
    }, [])
let id = TimeStamp.length;
    return(
        <>
        <h1>Home</h1>
        <h2>{Stock["2. Symbol"]}</h2>
        {TimeStamp.map(element => <HomeJSX key={element["5. volume"] + element["1. open"]} e={element} /> )}
        </>
    )
}

export default Home
