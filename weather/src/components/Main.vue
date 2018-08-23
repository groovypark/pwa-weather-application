<template>
  <div>
    <v-app v-bind:class="weatherComputed">
      <v-navigation-drawer
        persistent
        :clipped="clipped"
        v-model="drawer"
        enable-resize-watcher
        fixed
        app
      >
        <v-list>
          <v-list-tile
            value="true"
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <!-- <router-link v-if="item.title === 'Logout'" to="/"> -->
                <v-list-tile-title v-text="item.title">
                </v-list-tile-title>
              <!-- </router-link> -->
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar v-bind:class="weatherComputed" app :clipped-left="clipped">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="text-white"></v-toolbar-side-icon>
        <v-toolbar-title v-text="title" class="text-white"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon><v-icon class="text-white">refresh</v-icon></v-btn>
      </v-toolbar>
      <v-content>
        <Weather
          v-bind:airCondition="airCondition"
          v-bind:airJisu="airJisu"
          v-bind:sigugon="sigugon"
          v-bind:dust="dust"
          v-bind:ozone="ozone"
          v-bind:ultrafineDust="ultrafineDust"/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Weather from './Weather.vue'
import {getGwonyeokFromSigugun} from "../../config/config.js";
// token, clientId, 
import {getLocation, showError} from "../api/geolocation.js";
// import {getAddressFromGeocode} from "../api/navermap.js";
import {getRealtimeCityAir, parseAirResult} from "../api/seoul.js";
import {AIR_CONDITION} from '../constant/airCondition.js'

export default {
  components: {
    Weather
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'dashboard',
          title: 'Inspire'
        },
        {
          icon: 'account_circle',
          title: 'Logout'
        },
      ],
      title: 'PWAir',
      airCondition: '보통',
      airJisu: 0,
      sigugon: '시구군',
      dust: 0,
      ozone: 0,
      ultrafineDust: 0
    }
  },
  created(){
      getLocation()
        .then(position => {
          naver.maps.Service.reverseGeocode(
          {
            location: new naver.maps.LatLng(position.coords.latitude, position.coords.longitude),
            // location: new naver.maps.LatLng(37.551770, 126.926041),
          },
          // getAddressFromGeocode(37.3595704, 127.105399)
            (status, response) => {
              if (status !== naver.maps.Service.Status.OK) {
                return alert('Something wrong!');
              }

              var result = response.result; // 검색 결과의 컨테이너
              // var items = result.items; // 검색 결과의 배열
              const sigugon=result.items[0]['addrdetail']['sigugun'];
              const gwonyeok = getGwonyeokFromSigugun(sigugon);
              getRealtimeCityAir(gwonyeok, sigugon)
                .then(result => {
                  const airInfo = parseAirResult(result);
                  
                  this.airJisu = airInfo['IDEX_MVL'];
                  this.airCondition = airInfo['IDEX_NM'];
                  this.sigugon = sigugon
                  this.dust = airInfo['PM10']
                  this.ozone = airInfo['O3'],
                  this.ultrafineDust = airInfo['PM25']
                  return airInfo;
                });
              return response;
              // do Something
             }
          )
        })
        .catch(error => {
          console.log("ERROR!! " + showError(error));
        })
  },
  computed: {
    weatherComputed() {
      switch (this.airCondition) {
        case AIR_CONDITION.GOOD:
          return 'green accent-4'
        case AIR_CONDITION.NORMAL:
          return 'orange lighten-1'
        case AIR_CONDITION.BAD:
          return 'error'
        case AIR_CONDITION.VERY_BAD:
          return 'error'
        default:
          return 'error'
      }
    }
  }
}
</script>