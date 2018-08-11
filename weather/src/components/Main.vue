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
        <Weather v-bind:airCondition="airCondition"/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Weather from './Weather.vue'
import {token, clientId, getGwonyeokFromSigugun} from "../../config/config.js";
import {getLocation, showError} from "../api/geolocation.js";
import {getAddressFromGeocode} from "../api/navermap.js";
import {getRealtimeCityAir, parseAirResult} from "../api/seoul.js";

export default {
  components: {
    Weather
  },
  data () {
    return {
      clipped: false,
      drawer: true,
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
      airCondition: 'normal',
      airJisu: 0
    }
  },
  created(){
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
              const gwonyeok = getGwonyeokFromSigugun(sigugon);
              getRealtimeCityAir(gwonyeok, sigugon)
                .then(result => {
                  console.log(result);
                  const airInfo = parseAirResult(result);
                  console.log(airInfo);
                  const _airJisu=airInfo['IDEX_MVL'];
                  const _airCondition = airInfo['IDEX_NM'];
                  console.log(this);
                  
                  this.airJisu = _airJisu;
                  this.airCondition = _airCondition;
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
  },
  computed: {
    weatherComputed() {
      switch (this.airCondition) {
        case 'good':
          return 'green accent-4'
        case 'normal':
          return 'orange lighten-1'
        case 'bad':
          return 'error'
      }
    }
  }
}
</script>