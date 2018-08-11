import Vue from 'vue';
import axios from 'axios';
import {token} from '../../config/config.js';

const baseUrl = 'http://openAPI.seoul.go.kr:8088/' + token + '/json/RealtimeCityAir/1/5/';
// Vue.prototype.$http = axios;

export function getRealtimeCityAir(gwonyeok, goo){
  const requestUrl = baseUrl + gwonyeok + '/' + goo;
  return axios.get(requestUrl);
}

export function parseAirResult(result) {
  const airData = result['data']['RealtimeCityAir'];
  const RESULT = airData['RESULT'];
  switch (RESULT['CODE']){
    case 'INFO-000' :
      return airData['row'][0];
    default:
      alert(RESULT['CODE'] + " : " + RESULT['MESSAGE']);
      return;
  }
}


