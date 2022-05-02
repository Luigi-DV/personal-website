<template>
<div class="text-gray-800 dark:text-gray-200 bg-circuitBoard dark:bg-circuitBoardDark py-5">
  <div class="grid col-span-1 md:flex items-center mt-10 justify-center">
    <div class="md:mr-4">
      <img class="md:w-40 rounded-full" src="../../../../assets/img/home/hero/1636117346076.jpeg" alt="">
    </div>
    <div class="md:border-l-2 pl-4 p-2 col-span-2 text-justify md:w-1/2 mt-10 md:mt-0">
      <h1 class="h-22 md:h-12 flex items-center text-base text-black dark:text-secondary-color bg-slate-200 dark:bg-slate-900 rounded-xl px-4 py-2 font-mono selection:bg-green-500 selection:text-black">
         <vue-writer :array="['curl https://luigelo.ldvloper.com/#/about']"
                     :typeSpeed="70" :caret="'cursor'" :iterations='1'>
           <span class="text-green-600 dark:text-green-500 font-italic mr-1">session@{{ this.ip }}~</span>
         </vue-writer>
      </h1>
      <p class="mt-4">
        After working as a web developer for the last 3 years, I decided to create Ldvloper, which provides the highest quality mobile app development services. This allows me to develop my knowledge of building software and applications. I have great interest in programming and I have developed several projects in this field during my university experience. In my free time I enjoy creating new things and learning new skills to improve my technical skills.
      </p>
    </div>
  </div>
  <!--Contact-->
  <div class="grid col-span-1 md:flex items-center justify-center mt-20 bg-transparent">
    <div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 shadow-2xl rounded-xl backdrop-blur-sm">
        <div class="flex items-center select-all cursor-pointer">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
          <p>linkedin.com/in/<span class="font-bold">{{ this.linkedin.username }}</span></p>
        </div>
        <div class="flex items-center select-all cursor-pointer">
          <github-icon-component class="h-7 w-7 mr-1 dark:text-white"></github-icon-component>
          <p>
           github.com/<span class="font-bold">{{ github.username }}</span>
          </p>
        </div>
        <!--Private Info AutoInjected-->
        <div v-if="showPrivateInfo" class="flex items-center select-all cursor-pointer">
          <at-symbol-icon class="h-7 w-7 mr-1"></at-symbol-icon>
          <p>{{ this.email }}</p>
        </div>
        <button v-else class="md:flex items-center pointer-cursor text-gray-500 hover:text-secondary-color" @click="showPrivateInfo = true">
          <span class="flex items-center">
            <eye-icon class="h-5 w-5 mr-1"></eye-icon>
            <span>Show Email</span>
          </span>
          <!--<recaptcha ref="recaptcha" @verify="submitSecureInfo()"></recaptcha>-->
        </button>
      </div>
    </div>
    <!--Languages Section-->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:ml-12 pt-10 md:pt-0">
        <div class="flex items-center">
          <p class="text-black font-bold mr-2 p-2 h-15- w-15 border rounded-full bg-gradient-to-b from-red-200 via-yellow-200 to-red-200">ES</p>
          <p>Native</p>
        </div>
        <div class="flex items-center">
          <p class="text-black font-bold mr-2 p-2 h-15- w-15 border rounded-full bg-gradient-to-br from-red-200 via-white to-blue-200">EN</p>
          <p>Advance</p>
        </div>
        <div class="flex items-center">
          <p class="text-black font-bold mr-2 p-2 h-15- w-15 border-2 border-gray-300 rounded-full bg-gradient-to-b from-white via-blue-200 to-red-200">RU</p>
          <p>Basic</p>
        </div>
        <div class="flex items-center">
          <p class="text-black font-bold mr-2 p-2 h-15- w-15 border rounded-full bg-gradient-to-br from-yellow-200 via-red-200 to-yellow-200">CA</p>
          <p>Advance</p>
        </div>
    </div>
  </div>
 <!--Main-->
  <div class="lg:flex mt-20 text-center ml-10 mr-10 md:ml-36 md:mr-36">
    <!--Technologies-->
    <div class="lg:mr-20 lg:w-1/3">
      <h1 class="text-xl font-bold italic my-10 capitalize">My know technologies</h1>
      <div class="relative mt-5 text-left">
        <!--Archutecture Section-->
        <div data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="150" class="flex items-center relative pb-5 pt-5 justify-start">
          <div class="border-r-2 border-primary-color dark:border-secondary-color absolute h-full top-2 z-10">
            <span class="rounded-full h-5 w-5 bg-white"></span>
            <div class="absolute -rotate-90 -ml-20 font-bold italic text-primary-color dark:text-secondary-color uppercase">Architecture</div>
          </div>
          <span class="bg-gray-900 dark:bg-white rounded-full h-2 w-2 -top-0 -ml-1 absolute"></span>
          <div class="ml-6 pt-5">
            <div class="grid grid-cols-3 gap-4 md:gap-8">
              <div v-for="item in softwareArchitectures" :key="item.name">
                <div @click="item.expand = !item.expand" @mouseenter="item.expand = true" @mouseleave="item.expand = false" :id="item.name" class="cursor-pointer" :title="item.name">
                  <transition>
                    <div class="flex items-center justify-center font-bold hover:font-black transition ease-in-out duration-300 hover:-translate-y-2 bg-white rounded-xl p-2 h-20 w-20">
                      <div v-if="item.expand" class="text-black font-light justify-center text-xs">
                        {{ item.name }}
                      </div>
                      <div v-else :class="item.class" class="p-2 text-white -skew-y-12">{{ item.abb }}</div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Backend Section-->
        <div data-aos-once="true" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="220" class="flex items-center relative pb-5 justify-start">
          <div class="border-r-2 border-primary-color dark:border-secondary-color absolute h-full top-2 z-10">
            <span class="bg-gray-900 dark:bg-white rounded-full h-2 w-2 -top-1 -ml-1 absolute"></span>
            <div class="absolute -rotate-90 -ml-14 font-bold italic text-primary-color dark:text-secondary-color uppercase">Backend</div>
          </div>
          <div class="ml-6 pt-5">
            <div class="grid grid-cols-3 gap-4 md:gap-8">
              <div v-for="item in backendTechnologies" :key="item.name">
                <a :href="item.link" :id="item.name" @mouseenter="item.expand = true" @mouseleave="item.expand = false">
                  <transition>
                    <div class="flex items-center justify-center font-bold hover:font-black transition ease-in-out duration-300 hover:-translate-y-2 bg-white rounded-xl p-2 h-20 w-20">
                      <div v-if="item.expand" class="text-black font-light justify-center text-xs">
                        {{ item.name }}
                      </div>
                      <component v-else class="transition ease-in-out duration-300 hover:-translate-y-2 bg-white rounded-xl p-2 h-20 w-20" v-bind:is="item.icon"></component>
                    </div>
                  </transition>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--FrontEnd Section-->
        <div data-aos-once="true" data-aos="fade-right" data-aos-duration="1800" data-aos-offset="150"  class="flex items-center relative pb-5 pt-5 justify-start">
          <div class="border-r-2 border-primary-color dark:border-secondary-color absolute h-full top-2 z-10">
            <span class="bg-gray-900 dark:bg-white rounded-full h-2 w-2 -top-1 -ml-1 absolute"></span>
            <div class="absolute -rotate-90 -ml-16 font-bold italic text-primary-color dark:text-secondary-color">FRONTEND</div>
          </div>
          <div class="ml-6 pt-5">
            <div class="grid grid-cols-3 gap-4 md:gap-8">
              <div v-for="item in frontendTechnologies" :key="item.name">
                <a :href="item.link" :id="item.name" @mouseenter="item.expand = true" @mouseleave="item.expand = false">
                  <transition>
                    <div class="flex items-center justify-center font-bold hover:font-black transition ease-in-out duration-300 hover:-translate-y-2 bg-white rounded-xl p-2 h-20 w-20">
                      <div v-if="item.expand" class="text-black font-light justify-center text-xs">
                        {{ item.name }}
                      </div>
                      <component v-else class="transition ease-in-out duration-300 text-black hover:-translate-y-2 bg-white rounded-xl p-2 h-20 w-20" v-bind:is="item.icon"></component>
                    </div>
                  </transition>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--Cloud Section-->
        <div data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="50" class="flex items-center relative pb-5 pt-5 justify-start">
          <div class="border-r-2 border-primary-color dark:border-secondary-color absolute h-full top-2 z-10">
            <span class="bg-gray-900 dark:bg-white rounded-full h-2 w-2 -top-1 -ml-1 absolute"></span>
            <div class="absolute -rotate-90 -ml-14 font-bold italic text-primary-color dark:text-secondary-color uppercase">Cloud</div>
          </div>

          <div class="ml-6 pt-5">
            <div class="grid grid-cols-3 gap-4 md:gap-8">
              <div v-for="item in cloudTechnologies" :key="item.name">
                <a :href="item.link" :id="item.name" @mouseenter="item.expand = true" @mouseleave="item.expand = false">
                  <transition>
                    <div class="flex items-center justify-center font-bold hover:font-black transition ease-in-out duration-300 hover:-translate-y-2 bg-white rounded-xl p-2 h-20 w-20">
                      <div v-if="item.expand" class="text-black font-light justify-center text-xs">
                        {{ item.name }}
                      </div>
                      <component v-else class="transition ease-in-out duration-300 hover:-translate-y-2 bg-white rounded-xl p-2 h-20 w-20" v-bind:is="item.icon"></component>
                    </div>
                  </transition>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--Software Section-->
        <div data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="150" class="flex items-center relative pb-5 pt-5 justify-start">
          <div class="border-r-2 border-primary-color dark:border-secondary-color absolute h-full top-2 z-10">
            <span class="bg-gray-900 dark:bg-white rounded-full h-2 w-2 -top-1 -ml-1 absolute"></span>
            <div class="absolute -rotate-90 -ml-16 font-bold italic text-primary-color dark:text-secondary-color uppercase">Software</div>
          </div>

          <div class="ml-6 pt-5">
            <div class="grid grid-cols-3 gap-4 md:gap-8">
              <div v-for="item in softwareTechnologies" :key="item.name">
                <a :href="item.link" :id="item.name" @mouseenter="item.expand = true" @mouseleave="item.expand = false">
                  <transition>
                    <div class="flex items-center justify-center font-bold hover:font-black transition ease-in-out duration-300 hover:-translate-y-2 bg-white rounded-xl p-2 h-20 w-20">
                      <div v-if="item.expand" class="text-black font-light justify-center text-xs">
                        {{ item.name }}
                      </div>
                      <component v-else class="transition ease-in-out duration-300 text-black hover:-translate-y-2 bg-white rounded-xl p-2 h-20 w-20" v-bind:is="item.icon"></component>
                    </div>
                  </transition>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Projects-->
    <div class="md:w-2/3">
      <h1 class="text-xl font-bold italic my-10">Experience</h1>

      <div class="relative mt-5 text-left">
        <!--Experiences List-->
        <div data-aos-once="true" v-for="item in experiences" :key="item.id" class="flex items-center relative" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="150">
          <div class="hidden md:block w-20">
            <div class="font-bold italic">{{  item.dates.year }}</div>
            <div class="md:flex space-x-1 text-xs">
              <div>{{ item.dates.monthStart }}.</div>
              <div>-</div>
              <div>{{ item.dates.monthEnd }}.</div>
            </div>
          </div>

          <div class="border-r-2 border-primary-color dark:border-secondary-color absolute h-full left-1 md:left-20 top-2 z-10">
            <span class="bg-gray-900 dark:bg-white rounded-full h-2 w-2 -top-1 -ml-1 absolute"></span>
          </div>

          <div class="ml-10">
            <div class="font-bold">{{ item.position }}</div>
            <div class="italic md:mb-4">{{ item.company }}</div>
            <div class="mb-4 mt-2 md:hidden">
              <div class="font-bold">{{  item.year }}</div>
              <div class="text-xs">{{ item.dates.monthStart }} - {{ item.dates.monthEnd }}</div>
            </div>
            <div class="mb-10">{{ item.description }}</div>
          </div>
        </div>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import GithubIconComponent from '../../../icons/GithubIconComponent'
import { EyeIcon, AtSymbolIcon, DeviceMobileIcon } from '@heroicons/vue/outline'
import gsap from 'gsap'
import LaravelIconComponent from '../../../icons/LaravelIconComponent'
import PhpIconComponent from '../../../icons/PhpIconComponent'
import MysqlIconComponent from '../../../icons/MysqlIconComponent'
import PostgresqlIconComponent from '../../../icons/PostgresqlIconComponent'
import AwsIconComponent from '../../../icons/AwsIconComponent'
import DotNetIconComponent from '../../../icons/DotNetIconComponent'
import NodeIconComponent from '../../../icons/NodeIconComponent'
import DenoIconComponent from '../../../icons/DenoIconComponent'
import AzureIconComponent from '../../../icons/AzureIconComponent'
import DigitaloceanIconComponent from '../../../icons/DigitaloceanIconComponent'
import PhpstormIconComponent from '../../../icons/PhpstormIconComponent'
import WebstormIconComponent from '../../../icons/WebstormIconComponent'
import PostmanIconComponent from '../../../icons/PostmanIconComponent'
import RiderIconComponent from '../../../icons/RiderIconComponent'
import GitIconComponent from '../../../icons/GitIconComponent'
import VueIconComponent from '../../../icons/VueIconComponent'
import ReactIconComponent from '../../../icons/ReactIconComponent'
import TypescriptIconComponent from '../../../icons/TypescriptIconComponent'

// import Recaptcha from '../../../Recaptcha'
export default {
  name: 'TimelineSectionComponent',
  components: { GithubIconComponent, EyeIcon, AtSymbolIcon, DeviceMobileIcon },
  data () {
    return {
      ip: null,
      github: {
        username: 'luigi-dv'
      },
      linkedin: {
        username: 'luigelo-davila'
      },
      showPrivateInfo: false,
      email: 'luigelo@ldvloper.com',
      inputEmail: null,
      softwareArchitectures: [
        { name: 'Domain Driven Design', abb: 'DDD', expand: false, class: 'bg-yellow-500' },
        { name: 'Model View Controller', abb: 'MVC', expand: false, class: 'bg-blue-500' },
        { name: 'Hexagonal', abb: 'HEX', expand: false, class: 'bg-red-500' }
      ],
      backendTechnologies: [
        { name: 'Laravel', icon: LaravelIconComponent, link: 'https://laravel.com/', expand: false },
        { name: 'PHP', icon: PhpIconComponent, link: 'https://www.php.net/', expand: false },
        { name: 'MySQL', icon: MysqlIconComponent, link: 'https://www.mysql.com/', expand: false },
        { name: 'Postgresql', icon: PostgresqlIconComponent, link: 'https://www.postgresql.org/', expand: false },
        { name: 'Dotnet', icon: DotNetIconComponent, link: 'https://www.postgresql.org/', expand: false },
        { name: 'NodeJS', icon: NodeIconComponent, link: 'https://nodejs.org/', expand: false },
        { name: 'Deno', icon: DenoIconComponent, link: 'https://deno.land/', expand: false }
      ],
      frontendTechnologies: [
        { name: 'VueJS', icon: VueIconComponent, link: 'https://vuejs.org/', expand: false },
        { name: 'ReactJS', icon: ReactIconComponent, link: 'https://es.reactjs.org/', expand: false },
        { name: 'Typescript', icon: TypescriptIconComponent, link: 'https://www.typescriptlang.org/', expand: false }
      ],
      cloudTechnologies: [
        { name: 'Amazon Web Services', icon: AwsIconComponent, link: 'https://aws.amazon.com/', expand: false },
        { name: 'Microsoft Azure', icon: AzureIconComponent, link: 'https://azure.microsoft.com/', expand: false },
        { name: 'Digital Ocean', icon: DigitaloceanIconComponent, link: 'https://www.digitalocean.com/', expand: false }
      ],
      softwareTechnologies: [
        { name: 'Github', icon: GithubIconComponent, link: 'https://github.com/', expand: false },
        { name: 'Rider', icon: RiderIconComponent, link: 'https://www.jetbrains.com/es-es/rider/', expand: false },
        { name: 'PHP Storm', icon: PhpstormIconComponent, link: 'https://www.jetbrains.com/es-es/phpstorm/', expand: false },
        { name: 'Web Storm', icon: WebstormIconComponent, link: 'https://www.jetbrains.com/es-es/webstorm/', expand: false },
        { name: 'Git', icon: GitIconComponent, link: 'https://git-scm.com/', expand: false },
        { name: 'Postman', icon: PostmanIconComponent, link: 'https://www.jetbrains.com/es-es/webstorm/', expand: false }
      ],
      experiences: [
        {
          id: 0,
          position: 'Full Stack Developer',
          company: 'Applus+',
          dates: {
            year: '2021',
            monthStart: 'Jul',
            monthEnd: 'Curr'
          },
          description: 'Local network server software management. Data extraction and distribution to the various laboratories.'
        },
        {
          id: 2,
          position: 'Software Developer',
          company: 'Jellyplot',
          dates: {
            year: '2022',
            monthStart: 'Jan',
            monthEnd: 'Curr'
          },
          description: 'Jellyplot is a multiplatform command line tool that allows developers to create depots with all their project data and related development platforms.'
        },
        {
          id: 2,
          position: 'Lead Developer',
          company: 'Ldvloper',
          dates: {
            year: '2021',
            monthStart: 'Jan',
            monthEnd: 'Sept 2022'
          },
          description: 'I create Ldvloper,a platform that offers a process of streamlining and efficiency in projects, interconnecting development platforms in a single environment.'
        },
        {
          id: 4,
          position: 'Analyst',
          company: 'Odournet SL',
          dates: {
            year: '2017',
            monthStart: 'Sept',
            monthEnd: '2019 Agost'
          },
          description: 'Analysis and classifification of chemical data for its subsequent management and study.'
        }
      ]
    }
  },
  mounted () {
    this.getClientIp()
  },
  watch: {
    inputEmail (n) {
      gsap.to(this, { duration: 0.5, tweened: Number(n) || 0 })
    }
  },
  methods: {
    getClientIp: function () {
      axios.get('https://api.ipify.org?format=json')
        .then(response => {
          this.ip = response.data.ip
        })
        .catch(e => {
          console.log(e)
        })
    },
    submitSecureInfo (response) {
      this.showPrivateInfo = true
    },
    // execute the recaptcha widget
    executeRecaptcha () {
      this.$refs.recaptcha.execute()
    }
  }
}
</script>

<style scoped>

</style>
