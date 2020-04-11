/* DEFINIENDO ARGUMENTOS POSIBLES PARA EL PARAMETRO KEY
    usando el package: commander
*/

const program =  require('commander')
const key_function = require('../commands/key')

program
    .command('set')
    .description('Set API key.')
    .action(key_function.set);

program
    .command('show')
    .description('Show API key.')
    .action(key_function.show);

program
    .command('remove')
    .description('Remove API key.')
    .action(key_function.remove);

program.parse(process.argv)