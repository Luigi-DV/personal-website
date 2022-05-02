<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl lg:px-8 lg:py-20 xl:px-24">
    <timeline-section-component></timeline-section-component>
  </div>
</template>

<script>
import TimelineSectionComponent from './sections/TimelineSectionComponent'
export default {
  name: 'AboutComponent',
  components: { TimelineSectionComponent }
}
</script>

<style scoped>

</style>
