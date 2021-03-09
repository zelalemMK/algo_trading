
import ApiKey from "../ApiKey/ApiKey";

const AlphaDataManager = {
    getStock(ticker) {
        return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker.ticker}&interval=1min&apikey=${ApiKey}`)
        .then(result => result.json())
    },
}


export default AlphaDataManager