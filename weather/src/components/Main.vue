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
        <Weather v-bind:weather="weather"/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Weather from './Weather.vue'

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
      weather: 'normal'
    }
  },
  computed: {
    weatherComputed() {
      switch (this.weather) {
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