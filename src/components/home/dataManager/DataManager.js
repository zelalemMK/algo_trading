import ApiKey from "../../../ApiKey/ApiKey";
import AlphaDataToStockData from "../../../helperFunctions/AlphaData_StockData"

const AlphaVantage = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${ApiKey}`;

const HomeManager = {
    getAll() {
        return fetch(`${AlphaVantage}`).then(result => result.json()
        .then(results => AlphaDataToStockData(results)))
    }
}

export default HomeManager;