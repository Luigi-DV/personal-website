<template>
  <div :class="{'bg-primary-color': this.checkIfHome(), 'bg-white dark:bg-gray-800': !this.checkIfHome()}">
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative flex items-center justify-between">
        <router-link
          to="/"
          aria-label="LDV"
          title="LDV"
          class="inline-flex items-center">
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
          <span
            :class="{'text-white': this.checkIfHome(), 'text-gray-700 dark:text-gray-100': !this.checkIfHome()}"
            class="ml-2 text-xl font-bold tracking-wide uppercase">LDV</span>
        </router-link>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <router-link
              to="/"
              active-class="active-navigation"
              aria-label="Home"
              title="Home"
              :class="{'text-white': this.checkIfHome(), 'text-gray-700 dark:text-gray-100': !this.checkIfHome()}"
              class="font-medium tracking-wide text-gray-700 dark:text-gray-100 transition-colors duration-200">
              Home</router-link>
          </li>
          <li>
            <router-link
              to="/portfolio"
              active-class="active-navigation"
              aria-label="Portfolio"
              title="Portfolio"
              :class="{'text-white': this.checkIfHome(), 'text-gray-700 dark:text-gray-100': !this.checkIfHome()}"
              class="font-medium tracking-wide transition-colors duration-200">Portfolio</router-link>
          </li>
          <li>
            <router-link
              to="/about"
              active-class="active-navigation"
              aria-label="About me"
              title="About me"
              :class="{'text-white': this.checkIfHome(), 'text-gray-700 dark:text-gray-100': !this.checkIfHome()}"
              class="font-medium tracking-wide dark:text-gray-100 transition-colors duration-200">About me</router-link>
          </li>
        </ul>
        <ul class="flex items-center hidden space-x-8 lg:flex">
            <dark-mode-toggle></dark-mode-toggle>
        </ul>
        <div class="lg:hidden flex items-center">
          <div class="px-8">
            <dark-mode-toggle></dark-mode-toggle>
          </div>
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            @click="isMenuOpen = true"
          >
            <svg
              :class="{'text-gray-100': this.checkIfHome(), 'text-gray-900 dark:text-gray-100': !this.checkIfHome()}"
              class="w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <Transition duration="550" name="nested">
            <div v-if="isMenuOpen" class="absolute z-50 top-0 left-0 w-full">
            <div class="p-5 bg-white border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <a
                    href="/"
                    aria-label="LDV"
                    title="LDV"
                    class="inline-flex items-center">
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
                      <rect x="3" y="1" width="7" height="12"></rect>
                      <rect x="3" y="17" width="7" height="6"></rect>
                      <rect x="14" y="1" width="7" height="6"></rect>
                      <rect x="14" y="11" width="7" height="12"></rect>
                    </svg>
                    <span
                      class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
                    >LDV</span
                    >
                  </a>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="text-black p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="isMenuOpen = !isMenuOpen"
                  >
                    <svg class="w-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <router-link
                      to="/"
                      active-class="active-navigation-mobile"
                      @click="isMenuOpen = false"
                      aria-label="Home"
                      title="Home"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200">
                      Home</router-link>
                  </li>
                  <li>
                    <router-link
                      to="/portfolio"
                      active-class="active-navigation-mobile"
                      @click="isMenuOpen = false"
                      aria-label="Portfolio"
                      title="Portfolio"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200">
                      Portfolio</router-link>
                  </li>
                  <li>
                    <router-link
                      to="/about"
                      active-class="active-navigation-mobile"
                      @click="isMenuOpen = false"
                      aria-label="About me"
                      title="About me"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200">About me</router-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DarkModeToggle from '../DarkModeToggle'
export default {
  name: 'NavigationComponent',
  components: { DarkModeToggle },
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    checkIfHome () {
      return this.$route.name === 'Home'
    }
  }
}
</script>
