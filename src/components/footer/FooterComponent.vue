<template>
  <footer class="text-gray-600 bg-white dark:bg-gray-800 body-font">
    <div class="container px-5 pt-5 mx-auto flex items-center justify-end">
      <div
        :class="{'bg-slate-400 dark:bg-slate-900': this.checkIfHome(), 'bg-slate-200 dark:bg-slate-900': !this.checkIfHome()}"
        class="rounded-md">
        <dark-mode-toggle></dark-mode-toggle>
      </div>
    </div>
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a href="/" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-white hover:text-secondary-color">
        <svg
          class="w-8 text-secondary-color"
          viewBox="0 0 24 24"
          stroke-linejoin="round"
          stroke-width="2"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke="currentColor"
          fill="none"
        >
          <rect x="3" y="1" width="7" height="22"></rect>
          <rect x="13" y="13" width="7" height="10"></rect>
        </svg>
        <span class="ml-3 text-xl">LDV</span>
      </a>
      <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {{ this.getYear() }} LDV —
        <span class="text-gray-600 ml-1" rel="@luigi_dv">@luigi_dv</span>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://github.com/Luigi-DV" class="text-gray-500 dark:text-gray-200 hover:text-secondary-color">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/luigelo-davila/" class="ml-3 text-gray-500 dark:text-gray-200 hover:text-secondary-color">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
    </div>
  </footer>
</template>

<script>
import DarkModeToggle from '../DarkModeToggle'
export default {
  components: { DarkModeToggle },
  name: 'FooterComponent',
  methods: {
    getYear: function () {
      return new Date().getFullYear()
    },
    checkIfHome () {
      return this.$route.name === 'Home'
    }
  }
}
</script>

<style scoped>

</style>
