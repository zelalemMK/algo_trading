
const AlphaDataToStockData = (props) => {
    let AlphaData = {
        Data: {
            symbol: ""
        },
        Series: {
            open: "",
            close: ""
        }
    };
    for (let [key, value] of Object.entries(props))
            {
                
                if(key.startsWith("Meta"))
                {
                    for (let [key1, value1] of Object.entries(value))
                    {
                        if(key1.startsWith("2."))
                            {
                                console.log(value1)
                                AlphaData.Data.symbol = value1;
                            }
                    }
                }
                else {
                    for (let [key1, value1] of Object.entries(value))
                    {
                     AlphaData.Series = value1;
                     console.log(value[key1]["1. open"])          
                    }
                }
            }

            

            console.log(AlphaData);
            return(AlphaData);
            
}
export default AlphaDataToStockData;