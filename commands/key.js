//COMANDOS DISPONIBLES PARA EL PARAMETRO DE ENTRADA <<KEY>>
const inquirer = require('inquirer')
const color = require('colors')
const KeyManager = require('../lib/KeyManager')
const {isRequire} = require('../utils/validations')

const key = {
    //Definiendo funcion SET del parametro de entrada KEY
    async set(key){
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API Key '.green + 'http://nomics.com',
                validate: isRequire
            }
        ]);
        const _key = keyManager.setKey( input.key );
        if(_key){
            console.log('API Key Set'.blue);
        }
    },
    //Definiendo funcion SHOW del parametro de entrada KEY
    show(){
        try {
            const keyManager = new KeyManager()
            const key = keyManager.getKey()

            console.log('Current API key ',key.yellow)
        } catch (error) {
            console.error(error.message.red)
        }
    },
    remove(){
        try {
            const keyManager = new KeyManager()
            keyManager.deleteKey()

            console.log('Key Removed'.blue)
        } catch (error) {
            console.error(error.message.red)
        }
    }
}

module.exports = key;