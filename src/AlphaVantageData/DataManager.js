
import ApiKey from "../ApiKey/ApiKey";

const AlphaDataManager = {
    getStock(ticker) {
        return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker.ticker}&interval=5min&apikey=${ApiKey}`)
        .then(result => result.json())
    },
}


export default AlphaDataManager