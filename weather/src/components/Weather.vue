<template>
  <v-container fluid class="text-white">
    <v-slide-y-transition mode="out-in">
      <v-layout v-layout justify-center>
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
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  props: {
    weather: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather-icon > .v-icon {
  /* height: 50px; */
  color: white;
  font-size: 90px;
}
</style>
