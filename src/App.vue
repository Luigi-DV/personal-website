<template>
  <div id="app" class="bg-white dark:bg-gray-900">
    <nav class="bg-gray-50 dark:bg-gray-900">
      <navigation-component></navigation-component>
    </nav>
    <div>
      <router-view></router-view>
    </div>
    <footer class="bg-gray-50 dark:bg-gray-9000 mt-20">
      <footer-component></footer-component>
    </footer>
  </div>
</template>

<script>
import NavigationComponent from './components/navigation/NavigationComponent.vue'
import FooterComponent from './components/footer/FooterComponent'
import './assets/tailwind.css'

export default {
  name: 'App',
  components: {
    NavigationComponent,
    FooterComponent
  }
}
</script>
