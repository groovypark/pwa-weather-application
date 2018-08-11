import Vue from 'vue'
import App from './App.vue'
import {token, clientId} from "../config/config.js";
import {getLocation, showError} from "./api/geolocation.js";
import {getAddressFromGeocode} from "./api/navermap.js";
import {getRealtimeCityAir, parseAirResult} from "./api/seoul";

console.log(token + " : " + clientId);

getLocation()
  .then(position => {
    console.log(position.coords.latitude + " : " +position.coords.longitude);
    // getAddressFromGeocode(position.coords.latitude, position.coords.longitude)
    getAddressFromGeocode(37.3595704, 127.105399)
      .then((status, response) => {
        if (status !== naver.maps.Service.Status.OK) {
          return alert('Something wrong!');
        }

        var result = response.result, // 검색 결과의 컨테이너
          items = result.items; // 검색 결과의 배열
        console.log("Naver result " + result);
        console.log(items);
        return response;
        // do Something
      })
  })
  .catch(error => {
    console.log("ERROR!! " + showError(error));
  });

getRealtimeCityAir('동북권', '성북구')
  .then(result => {
      console.log(result);
      const airInfo = parseAirResult(result);
      console.log(airInfo);
    }
  );
// console.log("Latitude: " + position.coords.latitude);
// console.log("Longitude: " + position.coords.longitude);

new Vue({
  el: '#app',
  render: h => h(App)
});
