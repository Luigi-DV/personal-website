<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="grid gap-10 lg:grid-cols-2">
      <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div class="max-w-xl mb-6">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-none">
            Overview -<br class="hidden md:block" />
            Know more
            <span class="inline-block text-primary-color"> about me</span>
          </h2>
          <p class="text-base text-gray-700 dark:text-gray-400 md:text-lg">
            {{ $filters.str_limit(VisionSection,180) }}
          </p>
        </div>
        <div>
          <router-link to="about" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-primary-color dark:text-secondary-color hover:text-deep-purple-800">
            Leer más
            <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </router-link>
        </div>
      </div>
      <div class="flex items-center justify-center -mx-4 lg:pl-8">
        <div class="flex flex-col items-end px-3">
          <img
              class="object-cover mb-6 rounded-xl shadow-lg w-48 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="../../../../assets/img/home/hero/1636117346076.jpeg"
              alt="" />
          <img class="object-cover w-40 rounded-xl shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="../../../../assets/img/home/about/3241241231.png" alt="" />
        </div>
        <div class="px-3">
          <img class="w-40 rounded-xl shadow-lg sm:w-52 xl:w-80"  src="../../../../assets/img/home/about/932432421.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSectionComponent',
  data () {
    return {
      links: {
        ldvloper: 'https://www.ldvloper.com'
      }
    }
  },
  computed: {
    VisionSection: function () {
      return 'After working as a web developer for the last 3 years, I decided to create Ldvloper, which provides the highest quality mobile app development services. This allows me to develop my knowledge of building software and applications. I have great interest in programming and I have developed several projects in this field during my university experience. In my free time I enjoy creating new things and learning new skills to improve my technical skills.'
    }
  }
}
</script>

<style scoped>

</style>
