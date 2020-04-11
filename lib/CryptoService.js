const axios = require('axios');
const colors = require('colors')

class CryptoService {

    constructor(apiKey){
        this.ApiKey = apiKey
        this.baseURL = 'https://api.nomics.com/v1/currencies/ticker'
    }

    async getPriceData(coinOption,currenci){
        try {
            const formatter = new Intl.NumberFormat('en-US',{
                style:'currency',
                currency:currenci
            })
            const res = await axios.get(`${this.baseURL}?key=${this.ApiKey}&ids=${coinOption}&convert=${currenci}`)

            let output = '';
            res.data.forEach(coin => {
                output+=`Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.price).green} | Rank: ${coin.rank.blue}\n`
            });
            return output;
        } catch (error) {
            handleError(error)
        }
    }
}

function handleError(err){
    if(err.response.status===401){
        throw new Error('Your API Key is Invalid - Go to http://nomics.com')
    }else if(err.response.status===404){
        throw new Error('Your API is not responding')
    }else{
    throw new Error('There was an error, somethig is not working')
    }
}

module.exports = CryptoService