// Archivo de VALIDACIONES
/*    Require Filds   */

const isRequired = input => input === '' ? 'This value is requrired' : true;

module.exports = { isRequired };