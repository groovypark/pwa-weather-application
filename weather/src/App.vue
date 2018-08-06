<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
html, body, .app{
  height: 100%;
  width: 100%;
}
body {
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
}
ul {
  list-style: none;
  padding: 0;
}
.text-white {
  color: white !important;
}
</style>

