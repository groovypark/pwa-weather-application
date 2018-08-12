const configJson    = require('./config.json');
const token         = configJson['token'];
const clientId      = configJson['clientId'];
const locationMap   = require('./location.json');

export function getGwonyeokFromSigugun(sigugun){
  if (!locationMap[sigugun]) {
    alert("이 앱은 서울에서만 사용 가능합니다.")
    throw Error("Not valid position")
  }
  return locationMap[sigugun];
}
export {token, clientId}

