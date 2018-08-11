const configJson    = require('./config.json');
const token         = configJson['token'];
const clientId      = configJson['clientId'];
const locationMap   = require('./location.json');

export function getGwonyeokFromSigugun(sigugun){
  return locationMap[sigugun];
}
export {token, clientId}

