<template>
  <div id="app" class="bg-white dark:bg-gray-900" :class="dark ? 'dark' : 'light'">
    <nav class="bg-gray-50 dark:bg-gray-900">
      <navigation-component></navigation-component>
    </nav>
    <div class="bg-gray-100 dark:bg-gray-900">
      <!--Injected Routes-->
      <router-view></router-view>
      <footer class="bg-gray-50 dark:bg-gray-9000">
        <footer-component></footer-component>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavigationComponent from './components/navigation/NavigationComponent.vue'
import FooterComponent from './components/footer/FooterComponent'

export default {
  name: 'App',
  components: {
    NavigationComponent,
    FooterComponent
  },
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>
