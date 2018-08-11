<template>
  <div fluid class="text-white">
    <v-slide-y-transition mode="out-in">
      <v-layout justify-center column>
        <div class="weather-icon">
          <v-icon v-if="weather === 'good'">
            sentiment_very_satisfied
          </v-icon>
          <v-icon v-if="weather === 'normal'">
            sentiment_satisfied
          </v-icon>
          <v-icon v-if="weather === 'bad'">
            sentiment_very_dissatisfied
          </v-icon>
        </div>
        <div class="temperature">
          80
        </div>
        <p>
          강남구의 대기는 지금 보통!
          <button v-on:click="getAirCondition">test</button>
        </p>
        <v-layout align-center justify-center row fill-height>
          <div class="dust">
            <div>미세먼지</div>
            <div>오존</div>
            <div>초미세먼지</div>
          </div>
        </v-layout>
      </v-layout>
    </v-slide-y-transition>
  </div>
</template>

<script>
import {token, clientId} from "../../config/config.js";
import {getLocation, showError} from "../api/geolocation.js";
import {getAddressFromGeocode} from "../api/navermap.js";
import {getRealtimeCityAir, parseAirResult} from "../api/seoul.js";

export default {
  props: {
    weather: String
  },
  methods :{
    getAirCondition(){

      getLocation()
        .then(position => {
          console.log(position.coords.latitude + " : " +position.coords.longitude);
          naver.maps.Service.reverseGeocode(
          {
            location: new naver.maps.LatLng(position.coords.latitude, position.coords.longitude),
          },
          // getAddressFromGeocode(37.3595704, 127.105399)
            function (status, response) {
              if (status !== naver.maps.Service.Status.OK) {
                return alert('Something wrong!');
              }

              var result = response.result, // 검색 결과의 컨테이너
                items = result.items; // 검색 결과의 배열
              console.log("Naver result " + result);
              console.log(items);
              console.log(result.items[0]['addrdetail']['sigugun']);
              const sigugon=result.items[0]['addrdetail']['sigugun'];
              getRealtimeCityAir('도심권', sigugon)
                .then(result => {
                  debugger;
                  console.log(result);
                  const airInfo = parseAirResult(result);
                  console.log(airInfo);
                  debugger;

                  const airJisu=airInfo['IDEX_MVL'];
                  const airCondition = airInfo['IDEX_NM'];
                  console.log(airJisu + " : " + airCondition);
                  return airInfo;
                });
              // return response;
              // do Something
             }
          )
        })
        .catch(error => {
          console.log("ERROR!! " + showError(error));
        })

    }
    ,
    getLocationAir(gwonyeok, goo){
      getRealtimeCityAir('동북권', '성북구')
    .then(result => {
        console.log(result);
        const airInfo = parseAirResult(result);
        console.log(airInfo);
        debugger;
        return airInfo;
      }
    );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather-icon > .v-icon {
  /* height: 50px; */
  color: white;
  font-size: 90px;
  padding-top: 25%;
}
.temperature {
  font-size: 50px !important;
  font-weight: lighter;
}
p {
  font-weight: bold;
  font-size: 20px;
}
li {
  list-style: none;
  width:10em;
  float: left;
}
.dust {
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0;
}
</style>
