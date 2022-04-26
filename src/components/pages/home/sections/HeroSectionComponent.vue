<template>
  <div class="relative bg-primary-color">
    <div class="absolute inset-x-0 bottom-0">
      <svg viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-white dark:text-gray-900" preserveAspectRatio="none">
        <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
      </svg>
    </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
        <h2 class="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
          <span class="mb-5">I'm  Luigi Davila</span>
          <br>
          <span class="relative inline-block px-2">
            <div class="absolute inset-0 transform -skew-x-12 bg-secondary-color"></div>
            <span class="relative text-teal-900">FullStack Developer</span>
          </span>
        </h2>
        <p class="mb-6 text-base text-indigo-100 md:text-xl">
          I design and build Web Applications & Software with the latest technologies
        </p>
        <span class="text-white text-md mb-10">My Technologies Skills</span>
        <div class="h-fit flex items-center max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-lg sm:mx-auto md:mb-16">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-transparent rounded-box ">
            <div class="carousel-item group">
              <VueIconComponent class="h-20 w-20"></VueIconComponent>
            </div>
            <div class="carousel-item group">
              <ReactIconComponent class="h-20 w-20"></ReactIconComponent>
            </div>
            <div class="carousel-item group">
              <DockerIconComponent class="h-20 w-20"></DockerIconComponent>
            </div>
            <div class="carousel-item group">
              <NodeIconComponent class="h-20 w-20"></NodeIconComponent>
            </div>
            <div class="carousel-item group">
              <LaravelIconComponent class="h-20 w-20"></LaravelIconComponent>
            </div>
            <div class="carousel-item group">
              <DotNetIconComponent class="h-20 w-20"></DotNetIconComponent>
            </div>
            <div class="carousel-item group">
              <LinuxIconComponent class="h-20 w-20"></LinuxIconComponent>
            </div>
            <div class="carousel-item group">
              <TypescriptIconComponent class="h-20 w-20"></TypescriptIconComponent>
            </div>
            <div class="carousel-item group">
              <AwsIconComponent class="h-20 w-20"></AwsIconComponent>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <a
          href="#vision-section"
          aria-label="Scroll down"
          class="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          v-smooth-scroll
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import VueIconComponent from '../icons/VueIconComponent'
import ReactIconComponent from '../icons/ReactIconComponent'
import LaravelIconComponent from '../icons/LaravelIconComponent'
import NodeIconComponent from '../icons/NodeIconComponent'
import DotNetIconComponent from '../icons/DotNetIconComponent'
import DockerIconComponent from '../icons/DockerIconComponent'
import LinuxIconComponent from '../icons/LinuxIconComponent'
import TypescriptIconComponent from '../icons/TypescriptIconComponent'
import AwsIconComponent from '../icons/AwsIconComponent'

export default {
  name: 'HeroSectionComponent',
  components: {
    VueIconComponent,
    ReactIconComponent,
    LaravelIconComponent,
    NodeIconComponent,
    DotNetIconComponent,
    DockerIconComponent,
    LinuxIconComponent,
    TypescriptIconComponent,
    AwsIconComponent
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
