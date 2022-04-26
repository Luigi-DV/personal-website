<template>
  <div>
      <div v-if="closed" @click="isOpened = true, isMinimized= false, closed = false" class="h-12 w-fit bg-primary-color hover:bg-secondary-color rounded-r-xl flex flex-col justify-center p-5 cursor-pointer">
        <div class="text-white flex items-center">
          <span class="text-sm">Open</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div v-if="!closed" :class="{minimize: isMinimized, open:isOpened}" class="flex flex-col justify-center p-5">
        <section class="h-full shadow-2xl rounded-md bg-white w-full md:w-5/6 mx-auto">
          <header class="flex justify-between items-center py-1 px-5">
            <div class="flex flex-row items-center">
              <div @click="closed = true, isMinimized= false, isOpened = false" class="bg-red-400 text-white rounded-full p-1 mr-2 cursor-pointer h-4 w-4">
              </div>
              <div @click="isMinimized = true, isClosed= false, isOpened = false" class="bg-yellow-400 text-white rounded-full p-1 mr-2 cursor-pointer h-4 w-4">
              </div>
              <div @click="isOpened = true, isMinimized= false, isClosed = false" class="bg-green-400 text-white rounded-full p-1 mr-5 cursor-pointer h-4 w-4">
              </div>
              <button class="hidden md:block flex flex-col justify-center items-center p-1 m-1 rounded-full text-gray-500 transition-color hover:bg-gray-100 hover:bg-opacity-60 focus:outline-none focus:ring-2">
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
            <div class="flex items-center px-2 border border-gray-300 rounded-md outline-none w-full focus:outline-none focus:ring">
              <svg v-on:click="focusInput()" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref="search"
                type="text"
                v-model="search"
                v-on:keydown.enter="getSearch()"
                placeholder="Search My Created Websites"
                class="w-full placeholder-gray-400 text-gray-400 border-hidden focus:outline-none focus:ring-transparent text-sm py-1 "
              />
            </div>
            <div class="hidden md:flex flex-row items-center text-gray-400">
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
          <main class="bg-gradient-to-r from-primary-color to-secondary-color h-full flex flex-col justify-center rounded-b-md">
            <iframe v-if="existsSearch()" id="inlineFrameExample" class="h-full"
                    title="Inline Frame Example"
                    :src="getSearch()">
            </iframe>
            <div v-else class="flex flex-col justify-center items-center p-5">
              <div class="lg:w-3/4 mx-auto">
                <h1 class="text-white text-lg font-bold mb-3">Favourites {{search}}</h1>
                <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                  <div class="max-w-xs cursor-pointer block p-2 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                    <div class="bg-white rounded-md mb-2 flex justify-center items-center">
                      <img class="h-20 rounded-md" src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="YT icon">
                    </div>
                    <h2 class="text-white text-center font-semibold">Channel</h2>
                  </div>
                  <div class="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                    <div class="bg-white rounded-md mb-2 flex justify-center items-center">
                      <img class="h-20 rounded-md" src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="YT icon">
                    </div>
                    <h2 class="text-white text-center font-semibold">Videos</h2>
                  </div>
                  <a href="https://tailwindcomponents.com/u/dece0" target="_blank" rel="noopener noreferrer" class="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                    <div class="bg-white rounded-md mb-2 flex justify-center items-center">
                      <img class="h-20 rounded-md" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github icon">
                    </div>
                    <h2 class="text-white text-center font-semibold">Dece0</h2>
                  </a>
                  <a href="http://svgicons.sparkk.fr/" target="_blank" rel="noopener noreferrer" class="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                    <div class="bg-white rounded-md mb-2 flex justify-center items-center">
                      <svg class="fill-current h-20 text-blue-500" viewBox="0 0 20 20">
                        <path d="M10,2.531c-4.125,0-7.469,3.344-7.469,7.469c0,4.125,3.344,7.469,7.469,7.469c4.125,0,7.469-3.344,7.469-7.469C17.469,5.875,14.125,2.531,10,2.531 M10,3.776c1.48,0,2.84,0.519,3.908,1.384c-1.009,0.811-2.111,1.512-3.298,2.066C9.914,6.072,9.077,5.017,8.14,4.059C8.728,3.876,9.352,3.776,10,3.776 M6.903,4.606c0.962,0.93,1.82,1.969,2.53,3.112C7.707,8.364,5.849,8.734,3.902,8.75C4.264,6.976,5.382,5.481,6.903,4.606 M3.776,10c2.219,0,4.338-0.418,6.29-1.175c0.209,0.404,0.405,0.813,0.579,1.236c-2.147,0.805-3.953,2.294-5.177,4.195C4.421,13.143,3.776,11.648,3.776,10 M10,16.224c-1.337,0-2.572-0.426-3.586-1.143c1.079-1.748,2.709-3.119,4.659-3.853c0.483,1.488,0.755,3.071,0.784,4.714C11.271,16.125,10.646,16.224,10,16.224 M13.075,15.407c-0.072-1.577-0.342-3.103-0.806-4.542c0.673-0.154,1.369-0.243,2.087-0.243c0.621,0,1.22,0.085,1.807,0.203C15.902,12.791,14.728,14.465,13.075,15.407 M14.356,9.378c-0.868,0-1.708,0.116-2.515,0.313c-0.188-0.464-0.396-0.917-0.621-1.359c1.294-0.612,2.492-1.387,3.587-2.284c0.798,0.97,1.302,2.187,1.395,3.517C15.602,9.455,14.99,9.378,14.356,9.378"></path>
                      </svg>
                    </div>
                    <h2 class="text-white text-center font-semibold">SVG icons</h2>
                  </a>
                  <div class="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                    <div class="bg-white rounded-md mb-2 flex justify-center items-center">
                      <img class="h-20 rounded-md" src="https://images-na.ssl-images-amazon.com/images/I/41AD72RCzmL.png" alt="NY times icon">
                    </div>
                    <h2 class="text-white text-center font-semibold">NY Times</h2>
                  </div>
                  <div class="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                    <div class="bg-white rounded-md mb-2 flex justify-center items-center">
                      <img class="h-20 rounded-md" src="https://www.stuba.sk/buxus/assets/images/web/icons/stu_800.png" alt="STU icon">
                    </div>
                    <h2 class="text-white text-center font-semibold">STU</h2>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SearchMeComponent',
  data: function () {
    return {
      search: '',
      link: '',
      links: [
        'ldvloper.com',
        'jellyplot.com',
        'insitutodeasesoriabiologica.com'
      ],
      closed: false,
      isMinimized: false,
      isOpened: true
    }
  },
  methods: {
    getSearch: function () {
      this.link = 'https://www.' + this.search
      return this.link
    },
    focusInput () {
      this.$refs.search.focus()
    },
    existsSearch: function () {
      return this.links.includes(this.search)
    }
  }
}
</script>

<style>
.close {
  display: none;
}
.close {
  height: 33.333333%;
}
.open {
  height: 100vh;
}
</style>
