const KeyManager = require('../lib/KeyManager')
const cryptoService = require('../lib/CryptoService')
const color = require('colors')

const check = {
    async price(cmd) {
        try {

            keyManager = new KeyManager();
            const key = keyManager.getKey();
    
            const api = new cryptoService(key)
    
            const outputData = await api.getPriceData(cmd.coin,cmd.cur);
    
            console.log(outputData)
        } catch (error) {
            console.error(error.message.red)
        }
        

    }
}

module.exports = check
