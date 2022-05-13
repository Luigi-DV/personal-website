<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <a :href="item.link" :aria-label="item.title" :title="item.title" target="_blank" v-for="item in portfolio" :id="item.id" :key="item.id"
         class="cursor-pointer hover:border-primary-color dark:hover:border-secondary-color hover:border overflow-hidden transition-shadow duration-300 bg-white dark:bg-gray-800 rounded-md shadow-xl">
        <img :src="item.image" class="object-cover w-full h-64" alt="" />
        <div class="p-5">
          <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
            <span class="transition-colors duration-200 text-gray-900 dark:text-gray-300 hover:text-primary-color dark:hover:text-secondary-color cursor-pointer" aria-label="Category" :title="item.category">{{ item.category }}</span>
            <span class="text-gray-600 dark:text-gray-200">— {{ item.date }}</span>
          </p>
          <span class="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 text-gray-800 dark:text-gray-200 hover:text-primary-color dark:hover:text-secondary-color">{{ item.title }}</span>
          <p class="mb-2 text-gray-700 dark:text-gray-300">
            {{ item.preview }}
          </p>
          <a :href="item.link" target="_blank" aria-label="Link" class="flex items-center font-semibold transition-colors duration-200 text-gray-800 dark:text-gray-200 hover:text-primary-color dark:hover:text-secondary-color">
            <p class="mr-1">Visit Site</p>
            <arrow-sm-right-icon class="h-4 w-4"></arrow-sm-right-icon>
          </a>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { ArrowSmRightIcon } from '@heroicons/vue/outline'
export default {
  name: 'PortfolioComponent',
  components: { ArrowSmRightIcon },
  data () {
    return {
      portfolio: [
        {
          id: 1,
          date: 'Jan 2022',
          title: 'Jellyplot',
          category: 'Planning Tool',
          link: 'https://www.jellyplot.com',
          preview: 'JellyPlot is a lightweight planning tool based on PHP Laravel framework and VueJS. Which allows you to organize various projects and tasks in an organized and simple way.',
          image: 'https://www.jellyplot.com/assets/images/social-preview.png'
        },
        {
          id: 2,
          date: 'Feb 2022',
          title: 'Movie App',
          category: 'VueJS SPA',
          link: 'https://movieapp.ldvloper.com',
          preview: 'Movie App is a VueJS based SPA that delivery movies and series content obtained via API.',
          image: 'https://movieapp.ldvloper.com/social-preview.png'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
