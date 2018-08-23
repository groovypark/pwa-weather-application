<template>
  <div fluid class="text-white">
    <v-slide-y-transition mode="out-in">
      <v-layout justify-center column>
        <div class="weather-icon">
          <v-icon v-if="airCondition === AIR_CONDITION.GOOD">
            sentiment_very_satisfied
          </v-icon>
          <v-icon v-if="airCondition === AIR_CONDITION.NORMAL">
            sentiment_satisfied
          </v-icon>
          <v-icon v-if="airCondition === AIR_CONDITION.BAD || airCondition === AIR_CONDITION.VERY_BAD">
            sentiment_very_dissatisfied
          </v-icon>
        </div>
        <div class="temperature">
          {{airJisu}}
        </div>
        <p>
          {{sigugon}}의 대기는 지금 {{airCondition}}!
        </p>
        <v-layout align-center justify-center row fill-height>
          <div class="dust">
            <li><b>미세먼지</b> {{dust}}㎍/㎥</li>
            <li><b>오존</b> {{ozone}}ppm</li>
            <li><b>초미세먼지</b> {{ultrafineDust}}㎍/㎥</li>
          </div>
        </v-layout>
      </v-layout>
    </v-slide-y-transition>
  </div>
</template>

<script>
import {AIR_CONDITION} from '../constant/airCondition.js'

export default {
  props: {
    airJisu: Number,
    airCondition: String,
    sigugon: String,
    dust: Number,
    ozone: Number,
    ultrafineDust: Number
  },
  data (){
    return {
      AIR_CONDITION
    }
  },
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
  padding: 2px;
}
.dust {
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0;
  font-size: 18px;
  padding-top: 12%;
  padding-left: 25%;
}
</style>
