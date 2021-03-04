
const AlphaDataToStockData = (props) => {
    let AlphaData = {
        Data: {
            symbol: ""
        },
        Series: {}
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
                        let id = 1;
                        AlphaData.Series.append(value1);
                        AlphaData.Series.id = id        
                       id++;              
                    }
                }
            }

            

            console.log(AlphaData);
            return(AlphaData);
            
}
export default AlphaDataToStockData;