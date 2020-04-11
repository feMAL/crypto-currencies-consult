const ConfigStore = require('configstore');
const pkg = require('../package.json');

class KeyManager {
    constructor(){
        this.config= new ConfigStore(pkg.name);
    }
    setKey(key){
        this.config.set('apiKey',key)
        return key;
    }
    getKey(){
        const key = this.config.get('apiKey')

        if(!key){
            throw new Error('No API Key Found - Get a Key at http://nomics.com');
        }
        return key;
    }
    deleteKey(){
        const key = this.config.get('apiKey')

        if(!key){
            throw new Error('No API Key Found - Get a Key at http://nomics.com');
        }else{
            this.config.delete('apiKey')
        }
        return;
    }
}

module.exports = KeyManager