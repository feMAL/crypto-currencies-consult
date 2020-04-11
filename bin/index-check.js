const program = require('commander');
const check = require('../commands/check')

program
    .command('price')
    .description('Check price of coins')
    .option('--coin <type>','Add specific coin type in CSV format', 'BTC,ETH,XRP')
    .option('--cur <type>','Chande kind of currency value', 'EUR')
    .action((cmd)=>{check.price(cmd)})

program.parse(process.argv);