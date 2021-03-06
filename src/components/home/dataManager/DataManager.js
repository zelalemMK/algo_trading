import ApiKey from "../../../ApiKey/ApiKey";
const AlphaVantage = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=${ApiKey}`;

const HomeManager = {
    getAll() {
        return fetch(`${AlphaVantage}`).then(result => result.json())
    }
}

export default HomeManager;