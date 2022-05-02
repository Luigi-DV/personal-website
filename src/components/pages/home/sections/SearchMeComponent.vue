<template>
    <div class="h-full overflow-x-hidden overflow-y-hidden pb-20">
    <transition-group name="nested">
      <div v-if="closed" @click="isOpened = true; isMinimized= false; closed = false" class="outer h-12 w-24 flex items-center bg-primary-color hover:bg-secondary-color rounded-r-xl p-5 cursor-pointer">
        <div class="text-white flex items-center">
          <span class="text-sm">Open</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div v-if="!closed" :class="{'search-minimized': isMinimized, 'search-opened': isOpened }" class="h-full w-full inner justify-center">
        <section id="search-website" ref="section" :class="{'extended': isExtended, 'notExtended': isExtended === false }" class="h-full shadow-2xl rounded-md bg-white w-full mx-auto">
          <header class="w-full grid grid-cols-3 md:grid-cols-5 justify-between items-center bg-gray-200 dark:bg-gray-700 rounded-t-md">
            <div :class="{'bg-gray-200 dark:bg-gray-800': showSidebar, 'contrast-75': activeContent }" class="col-span-1 py-1 px-4 flex flex-row items-center">
              <div @click="closed = true" class="bg-red-400 text-white rounded-full p-1 mr-2 cursor-pointer h-4 w-4">
              </div>
              <div @click="isExtended = false" class="bg-yellow-400 text-white rounded-full p-1 mr-2 cursor-pointer h-4 w-4">
              </div>
              <div @click="isOpened = true; isExtended = true" class="bg-green-400 text-white rounded-full p-1 mr-5 cursor-pointer h-4 w-4">
              </div>
              <button @click="showSidebar = !showSidebar" class="hidden md:block flex flex-col justify-center items-center p-1 m-1 rounded-full text-gray-500 transition-color hover:bg-gray-100 hover:bg-opacity-60 focus:outline-none focus:ring-2">
                <svg class="fill-current h-5 w-5" viewBox="0 0 20 20">
                  <path d="M3.015,4.779h1.164V3.615H3.015V4.779z M18.73,1.869H1.269c-0.322,0-0.582,0.26-0.582,0.582v15.133
                      c0,0.322,0.26,0.582,0.582,0.582H18.73c0.321,0,0.582-0.26,0.582-0.582V2.451C19.312,2.129,19.052,1.869,18.73,1.869z
                      M18.148,16.42c0,0.322-0.261,0.582-0.582,0.582H2.433c-0.322,0-0.582-0.26-0.582-0.582V6.525h16.297V16.42z M18.148,5.361H1.851
                      V3.615c0-0.322,0.26-0.582,0.582-0.582h15.133c0.321,0,0.582,0.26,0.582,0.582V5.361z M7.671,4.779h1.165V3.615H7.671V4.779z
                      M5.344,4.779h1.164V3.615H5.344V4.779z"></path>
                </svg>
              </button>
              <button class="hidden md:block flex flex-col justify-center items-center p-1 m-1 rounded-full text-gray-400 transition-color hover:bg-gray-100 hover:bg-opacity-60 focus:outline-none focus:ring-2">
                <svg class="fill-current h-5 w-5" viewBox="0 0 20 20">
                  <path
                    d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
                  ></path>
                </svg>
              </button>
              <button class="hidden md:block flex flex-col justify-center items-center p-1 m-1 rounded-full text-gray-400 transition-color hover:bg-gray-100 hover:bg-opacity-60 focus:outline-none focus:ring-2">
                <svg class="fill-current h-5 w-5" viewBox="0 0 20 20">
                  <path
                    d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="col-span-2 md:col-span-3 group flex items-center group-focus:justify-left ml-5 my-2 border border-transparent rounded-md outline-none focus:outline-none focus:ring bg-gray-300 dark:bg-gray-900 p-1 mx-5 md:mx-0">
              <svg v-on:click="focusInput()" xmlns="http://www.w3.org/2000/svg" class="text-center group-focus:text-left h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref="search"
                type="text"
                v-model="search"
                @keyup.enter="checkSearch(this.search)"
                placeholder="Search or enter website name"
                class="w-full bg-transparent border-none border-transparent placeholder-gray-400 text-xs text-center focus:text-left text-gray-400 border-hidden focus:outline-none focus:ring-transparent py-1 transition duration-150 ease-out hover:ease-in"
              />
            </div>
            <div class="hidden md:flex flex-row items-center justify-end text-gray-400 px-5 col-span-1">
              <button class="flex flex-col justify-center items-center p-1 m-1 rounded-full transition-colors hover:bg-gray-100 hover:bg-opacity-60 focus:outline-none focus:ring-2">
                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path
                    d="M8.416,3.943l1.12-1.12v9.031c0,0.257,0.208,0.464,0.464,0.464c0.256,0,0.464-0.207,0.464-0.464V2.823l1.12,1.12c0.182,0.182,0.476,0.182,0.656,0c0.182-0.181,0.182-0.475,0-0.656l-1.744-1.745c-0.018-0.081-0.048-0.16-0.112-0.224C10.279,1.214,10.137,1.177,10,1.194c-0.137-0.017-0.279,0.02-0.384,0.125C9.551,1.384,9.518,1.465,9.499,1.548L7.76,3.288c-0.182,0.181-0.182,0.475,0,0.656C7.941,4.125,8.234,4.125,8.416,3.943z M15.569,6.286h-2.32v0.928h2.32c0.512,0,0.928,0.416,0.928,0.928v8.817c0,0.513-0.416,0.929-0.928,0.929H4.432c-0.513,0-0.928-0.416-0.928-0.929V8.142c0-0.513,0.416-0.928,0.928-0.928h2.32V6.286h-2.32c-1.025,0-1.856,0.831-1.856,1.856v8.817c0,1.025,0.832,1.856,1.856,1.856h11.138c1.024,0,1.855-0.831,1.855-1.856V8.142C17.425,7.117,16.594,6.286,15.569,6.286z"
                  ></path>
                </svg>
              </button>
              <button class="flex flex-col justify-center items-center p-1 m-1 rounded-full transition-color hover:bg-gray-100 hover:bg-opacity-60 focus:outline-none focus:ring-2">
                <svg class="fill-current h-4 w-4" viewBox="0 0 25 25">
                  <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"/>
                </svg>
              </button>
              <button class="flex flex-col justify-center items-center p-1 m-1 rounded-full transition-color hover:bg-gray-100 hover:bg-opacity-60 focus:outline-none focus:ring-2">
                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path
                    d="M18.378,1.062H3.855c-0.309,0-0.559,0.25-0.559,0.559c0,0.309,0.25,0.559,0.559,0.559h13.964v13.964
                      c0,0.309,0.25,0.559,0.559,0.559c0.31,0,0.56-0.25,0.56-0.559V1.621C18.938,1.312,18.688,1.062,18.378,1.062z M16.144,3.296H1.621
                      c-0.309,0-0.559,0.25-0.559,0.559v14.523c0,0.31,0.25,0.56,0.559,0.56h14.523c0.309,0,0.559-0.25,0.559-0.56V3.855
                      C16.702,3.546,16.452,3.296,16.144,3.296z M15.586,17.262c0,0.31-0.25,0.558-0.56,0.558H2.738c-0.309,0-0.559-0.248-0.559-0.558
                      V4.972c0-0.309,0.25-0.559,0.559-0.559h12.289c0.31,0,0.56,0.25,0.56,0.559V17.262z"
                  ></path>
                </svg>
              </button>
            </div>
          </header>
          <div class="flex h-full bg-gradient-to-r from-primary-color to-secondary-color">
            <transition name="slide-fade">
              <!--Sidebar-->
              <div v-if="showSidebar" :class="{'contrast-75': activeContent }" class="outer overflow-x-hidden h-full w-1/5 bg-gray-200 dark:bg-gray-800 rounded-r-sm" @click="activeContent = false">
                <sidebar-search-me-component></sidebar-search-me-component>
              </div>
            </transition>
            <main :class="{'w-4/5': showSidebar, 'w-full': !showSidebar }" class="h-full flex flex-col justify-center overflow-x-hidden" @click="activeContent = true">
              <!--Website-->
              <iframe @click="activeContent = true" v-if="existsSearch" id="inlineFrameExample" class="h-full w-full"
                      title="Inline Frame Example"
                      :src="'https://' + this.search">
              </iframe>
              <div v-else class="flex items-center p-5">
                <div class="lg:w-3/4 mx-auto">
                  <h1 class="text-white text-lg font-bold mb-3">Favourites {{search}}</h1>
                  <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    <div v-for="link in links" :key="link" @click="getSearchClicking(link.url)" class="max-w-xs cursor-pointer block p-2 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                      <div class="bg-white rounded-md mb-2 flex justify-center items-center">
                        <img class="w-full h-full rounded-md" :src="link.img" :alt="link.alt">
                      </div>
                      <h2 class="text-white text-center font-semibold">{{ link.name }}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>
      </div>
    </transition-group>
  </div>
</template>

<script>
import SidebarSearchMeComponent from './SearchMeChilds/SidebarSearchMeComponent'
export default {
  name: 'SearchMeComponent',
  components: { SidebarSearchMeComponent },
  data: function () {
    return {
      search: '',
      link: '',
      links: [
        { name: 'Jellyplot', url: 'www.jellyplot.com', img: 'https://www.jellyplot.com/assets/images/social-preview.png', alt: 'Jellyplot Logo' }
      ],
      showSidebar: false,
      closed: false,
      isMinimized: false,
      isOpened: true,
      isExtended: false,
      activeContent: false,
      existsSearch: false
    }
  },
  watch: {
    search: function (newSearch, oldSearch) {
      this.existsSearch = false
    }
  },
  methods: {
    focusInput () {
      this.$refs.search.focus()
    },
    checkSearch: function (search) {
      this.existsSearch = this.links.some(item => item.url === search)
    },
    getSearchClicking: function (element) {
      this.search = element
      this.existsSearch = true
    },
    getAllData () {
      this.isExtended = true
    }
  },
  mounted () {
    window.addEventListener('keyup', (e) => {
      if (e.key === '/') {
        document.getElementById('search-website').scrollIntoView({
          behavior: 'auto',
          block: 'center',
          inline: 'center'
        })
        e.preventDefault()
        this.isExtended = true
        this.$refs.search.focus()
      }
    })
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        this.isExtended = false
        this.closed = true
      }
    })
  }
}
</script>

<style>
.search-opened {
  height: 100vh;
  transition: 1000ms ease-in-out;
  transition-delay: 200ms;
}
.search-minimized{
  height: 33%;
  transition: 1000ms ease-in-out;
  transition-delay: 200ms;
}

@media (min-width: 768px) {
  .extended{
    width: 100%;
    transition: 1000ms ease-in-out;
    transition-delay: 200ms;
  }
  .notExtended{
    width: 66%;
    transition: 1000ms ease-in-out;
    transition-delay: 200ms;
  }
}

/* Nested Transition | rules that target nested elements */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 1s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(-50px);
  opacity: 0;
}

/* Slide Fade | Enter and leave animations can use different
  durations and timing functions. */
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
