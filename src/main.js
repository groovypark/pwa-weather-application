import Vue from 'vue'
import App from './App.vue'
import {token, clientId} from "../config/config.js";

console.log(token + " : " + clientId);
new Vue({
  el: '#app',
  render: h => h(App)
})
