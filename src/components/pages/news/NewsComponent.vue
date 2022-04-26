<template>
  <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <blog-filter-component
      @changeSearch="changeSearch"
      @changeOrderBy="changeOrderBy">
    </blog-filter-component>
    <!--API-->
    <div v-if="!this.error" class="px-4 py-16">
      <div>
        <div class="grid gap-10 row-gap-8 lg:grid-cols-5">
          <!--Main Section-->
          <div class="lg:col-span-2">
            <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              20 Nov 2020
            </p>
            <div class="mb-3">
              <a href="/" aria-label="Article" class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                  What it means when a man falls from outer space
                </p>
              </a>
            </div>
            <p class="mb-4 text-base text-gray-700 md:text-lg">
              Call it magical realism, call it realistic fantasy—call it whatever you want, but Arimah's playfully subversive style is wholly her own.
            </p>
            <div class="flex items-center">
              <a href="/" aria-label="Author" class="mr-3">
                <img alt="avatar" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
              </a>
              <div>
                <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">Petru Vîrtos</a>
                <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
              </div>
            </div>
          </div>
          <!--Secondary Section-->
          <div class="flex flex-col space-y-8 lg:col-span-3">
            <div v-for="item in newsRelevant.slice(0, 2)" :key="item.source.id">
              <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                {{ dateTime(item.publishedAt)  }}
              </p>
              <div class="mb-3">
                <a href="/" aria-label="Article" class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                  <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                    {{  item.title }}
                  </p>
                </a>
              </div>
              <p class="mb-4 text-base text-gray-700 md:text-lg">
                {{ item.description }}
              </p>
              <div class="flex items-center">
                <a href="/" aria-label="Author" class="mr-3">
                  <img alt="avatar" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
                </a>
                <div>
                  <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">{{ item.author }}</a>
                  <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--All News-->
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <paginate name="news" :list="news" :per="10"  class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
              <div v-for="item in news" :key="item.source.id" class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img v-if="item.urlToImage" :src="item.urlToImage" class="object-cover w-full h-64" alt="" />
                <div class="p-5 border border-t-0">
                  <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a href="/" class="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700" aria-label="Category" title="traveling">traveling</a>
                    <span class="text-gray-600">— 28 Dec 2020</span>
                  </p>
                  <a href="/" aria-label="Category" title="Visit the East" class="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">Visit the East</a>
                  <p class="mb-2 text-gray-700">
                    {{item.description}}
                  </p>
                  <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                </div>
              </div>
            </paginate>
            <paginate-links for="news"></paginate-links>
      </div>
    </div>
    <!--Default-->
    <div v-else class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div v-for="item in newsDefault" :id="item.id" :key="item.id" class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img :src="item.image" class="object-cover w-full h-64" alt="" />
          <div class="p-5 border border-t-0">
            <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a href="/" class="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700" aria-label="Category" title="traveling">traveling</a>
              <span class="text-gray-600">— {{ item.date }}</span>
            </p>
            <a href="/" aria-label="Category" title="Visit the East" class="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">{{ item.title }}</a>
            <p class="mb-2 text-gray-700">
              {{ item.preview }}
            </p>
            <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import BlogFilterComponent from './NewsFilterComponent.vue'

const NEWS_API_KEY = 'fdafsaf'

export default {
  name: 'BlogComponent',
  components: {
    BlogFilterComponent
  },
  data () {
    return {
      newsDefault: [
        {
          id: 1,
          date: '28 Dec 202',
          title: 'Visit the East',
          preview: 'Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque',
          image: 'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
        },
        {
          id: 2,
          date: '28 Dec 202',
          title: 'Simple is better',
          preview: 'Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque',
          image: 'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
        },
        {
          id: 3,
          date: '28 Dec 202',
          title: 'Film It!',
          preview: 'Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque',
          image: 'https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
        }
      ],
      news: [],
      newsRelevant: [],
      orderBy: 'publishedAt',
      search: '',
      geoFilter: 'US',
      error: false
    }
  },
  methods: {
    dateTime (value) {
      return moment(value).format('D MMM YY')
    },

    changeSearch: function (search) {
      this.search = search
      this.getAll()
    },

    changeOrderBy: function (orderBy) {
      this.orderBy = orderBy
      this.getAll()
    },

    fetchRelevantNews: function () {
      axios.get('https://newsapi.org/v2/everything?q=' + this.search + '&from=2022-03-24&sortBy=' + this.orderBy + '&apiKey=' + NEWS_API_KEY)
        .then(response => {
          this.newsRelevant = response.data.articles
          if (response.data.status === 'error') {
            this.error = true
          }
        })
        .catch(e => {
          this.error = true
        })
    },
    fetchNews: function () {
      axios.get('https://newsapi.org/v2/everything?q=' + this.search + '&from=2022-03-24&sortBy=' + this.orderBy + '&apiKey=' + NEWS_API_KEY)
        .then(response => {
          this.news = response.data.articles
          if (response.data.status === 'error') {
            this.error = true
          }
        })
        .catch(e => {
          this.error = true
        })
    },
    getAll: function () {
      this.fetchNews()
      this.fetchRelevantNews()
    }
  },

  mounted () {
    this.getAll()
  }

}
</script>

<style scoped>

</style>
