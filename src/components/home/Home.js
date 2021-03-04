import React, { useEffect, useState } from "react"
import HomeJSX from "./JSX/HomeJSX"
import HomeManager from "./dataManager/DataManager"

const Home = (props) => {

    const [Alpha, setAlpha] = useState([]);
    const [TimeStamp, setTimeStamp] = useState([]);
    const [Stock, setStock] = useState([]);

    let i = 0;
    const getStockData = () => {
        HomeManager.getAll().then((results) => {
            setAlpha(results);

            // for (const [key, value] of Object.entries(results)) {
            //     if(i == 0)
            //     {
            //         setStock(value);
            //     }
            //     else
            //     {
            //         setTimeStamp(value)
            //     }
            //     i++
            //   }
        })
    }

    useEffect(() => {
        getStockData();
    }, [])
let id = 1;
    return(
        <>
        <HomeJSX stock={Stock} timeStamp={TimeStamp}/>
        </>
    )
}

export default Home
