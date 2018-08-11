<template>
  <div fluid class="text-white">
    <v-slide-y-transition mode="out-in">
      <v-layout justify-center column>
        <div class="weather-icon">
          <v-icon v-if="airCondition === 'good'">
            sentiment_very_satisfied
          </v-icon>
          <v-icon v-if="airCondition === 'normal'">
            sentiment_satisfied
          </v-icon>
          <v-icon v-if="airCondition === 'bad'">
            sentiment_very_dissatisfied
          </v-icon>
        </div>
        <div class="temperature">
          {{airJisu}}
        </div>
        <p>
          강남구의 대기는 지금 보통!
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
import {token, clientId, getGwonyeokFromSigugun} from "../../config/config.js";
import {getLocation, showError} from "../api/geolocation.js";
import {getAddressFromGeocode} from "../api/navermap.js";
import {getRealtimeCityAir, parseAirResult} from "../api/seoul.js";

export default {
  props: {
    airJisu: Number,
    airCondition: String
  },
  methods :{
    getLocationAir(gwonyeok, goo){
      getRealtimeCityAir('동북권', '성북구')
    .then(result => {
        console.log(result);
        const airInfo = parseAirResult(result);
        console.log(airInfo);
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
