<template>
  <div>
    <section>
      <hero-section></hero-section>
    </section>
    <section id="vision-section" class="h-screen flex flex-col justify-center">
      <vision-section></vision-section>
    </section>
    <div>
      <search-me id="sec-2"></search-me>
    </div>
  </div>
</template>

<script>
import HeroSection from './sections/HeroSectionComponent'
import VisionSection from './sections/AboutSectionComponent'
import SearchMe from './sections/SearchMeComponent'
export default {
  name: 'HomeComponent',
  components: {
    HeroSection,
    VisionSection,
    SearchMe
  },
  methods: {
    goTo: function (refName) {
      const element = this.$refs[refName]
      const top = element.offsetTop

      window.scrollTo(0, top)
    }
  }
}
</script>

<style scoped>

</style>
