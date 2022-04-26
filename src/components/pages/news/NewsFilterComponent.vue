<template>
  <div>
    <div class="mb-1 p-5 w-full">
      <h1 class="text-gray-900 dark:text-gray-300 text-xl font-bold mb-8">Filters:</h1>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div>
          <label for="search" class="text-sm">
           Search
          </label>
          <div class="flex w-full border border-gray-200 focus:ring-orange-applus focus:border-orange-applus rounded-md sm:text-sm border-gray-300 dark:border-gray-700">
            <input id="search" v-model="search" type="search" placeholder="Search" class="w-full dark:text-white dark:bg-gray-900 border-hidden focus:border-hidden focus:ring-transparent">
            <button v-on:click="this.emitSearch()" class="px-5 bg-gray-200 hover:bg-secondary-color transition ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        <div class="px-12">
          <div class="grid gap-8 grid-cols-2 md:grid-cols-3 mt-5 justify-items-end">
            <div class="flex group justify-self-start">
              <label for="sortBy" class="text-sm text-orange-applus">
                Order:
              </label>
              <select id="sortBy" v-on:change="this.emitOrderBy()" v-model="orderBy" class="cursor-pointer text-sm border-none bg-transparent text-black focus:text-black dark:text-gray-400 focus:text-gray-500 placeholder-white focus:ring-transparent focus:border-transparent">
                <option value="publishedAt">Published at</option>
                <option value="relevancy">Relevancy</option>
                <option value="popularity">Popularity</option>
              </select>
            </div>
            <div v-if="!this.error" class="flex group justify-self-start">
              <label for="sortBy" class="text-sm text-orange-applus">
                Source:
              </label>
              <select id="sortBy" v-model="currentSource" class="cursor-pointer text-sm border-none bg-transparent text-black focus:text-black dark:text-gray-400 focus:text-gray-500 placeholder-white focus:ring-transparent focus:border-transparent">
                <option value="example" selected>Select</option>
                <option v-for="source in sources.sources" :key="source.id">
                  {{ source.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const NEWS_API_KEY = ''

export default {
  name: 'NewsFilterComponent',
  data () {
    return {
      search: 'Development',
      orderBy: 'publishedAt',
      perPage: '',
      sources: [],
      currentSource: '',
      error: null
    }
  },
  methods: {
    getSources: function () {
      axios.get('https://newsapi.org/v2/top-headlines/sources?apiKey=' + NEWS_API_KEY)
        .then(response => {
          this.sources = response.data
          this.currentSource = response.data.sources[1].name
        })
        .catch(e => {
          this.error = true
        })
    },
    emitSearch: function () {
      this.$emit('changeSearch', this.search)
    },
    emitOrderBy: function () {
      this.$emit('changeOrderBy', this.orderBy)
    }
  },
  mounted () {
    this.emitSearch()
    this.emitOrderBy()
    this.getSources()
  }
}
</script>

<style scoped>

</style>
