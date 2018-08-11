<template>
  <div class="login text-white">
    <h1>PWAir</h1>
    <p>open the window when we push you</p>
    <div class="icon-div">
      <v-icon x-large class="icon">sentiment_very_satisfied</v-icon>
      <v-icon x-large class="icon">sentiment_satisfied</v-icon>
      <v-icon x-large class="icon">sentiment_very_dissatisfied</v-icon>
    </div>
    <div class="login-box">
      <ul>
        <li>
          <input type="text">
        </li>
        <li>
          <input type="text">
        </li>
        <li class="login-li">
          <router-link to="/main"><v-btn class="login-btn">Login</v-btn></router-link>
        </li>
      </ul>
    </div>
    <div class="social-login-div">
      <!-- <router-link to="/main"> -->
        <v-btn v-on:click="signInWithGoogle" round class="social-login-btn">
          google
        </v-btn>
      <!-- </router-link> -->
      <router-link to="/main"><v-btn round class="social-login-btn">facebook</v-btn></router-link>
    </div>
  </div>
</template>

<script>
import signInWithGoogle from '../auth/googleAuth.js'

export default {
  methods: {
    signInWithGoogle
  }
}
</script>

<style scoped>
  .login {
    height: 100%;
    width: 100%;
    background: skyblue;
  }
  h1 {
    font-size: 50px;
    font-weight: 800;
    padding-top: 90px;
  }
  p {
    color: rgba(255,255,255,0.8)
  }
  .icon-div {
    padding-bottom: 20px;
    padding-left: 10px;
  }
  .icon {
    padding-right: 10px;
  }
  .login-box {
    height: 190px;
    width: 280px;
    background: white;
    display: inline-block;
    text-align: center;
  }
  ul {
    padding-top: 14px;
  }
  li {
    padding: 8px;
  }
  input {
    background: #FFF9C4;
    display: inline-block;
    height: 24px;
    width: 250px;
    color: #212121;
    padding: 16px;
  }
  .login-li {
    padding-top: 16px;
  }
  .login-btn {
    color: #212121;
    background: #FFE082;
    width: 250px;
  }
  .social-login-div {
    padding: 14px;
  }
  .social-login-btn {
    color: white;
    background: #81D4FA;
    width: 120px;
  }
  a {
    text-decoration: none;
  }
</style>
