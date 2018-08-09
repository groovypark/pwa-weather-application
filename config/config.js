global.__base_dir = process.env.PWD;
// const fs = require('fs');
// const configJson    = JSON.parse(fs.readFileSync(__base_dir + '/config/config.json', 'utf8'));
const configJson    = require('./config.json');
const token         = configJson['token'];
const clientId      = configJson['clientId'];

export {token, clientId}

// function Config() {
//     const configJson    = JSON.parse(fs.readFileSync(__base_dir + '/config/config.json', 'utf8'));
//     this.token         = configJson['token'];
//     this.clientId      = configJson['clientId'];
// }
//
// Config.prototype.getToken = function () {
//     return this.token;
// };
//
// Config.prototype.getClientId = function () {
//     return this.clientId;
// };
//
// module.exports = Config;
