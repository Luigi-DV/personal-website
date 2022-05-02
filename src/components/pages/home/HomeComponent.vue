<template>
  <div>
    <section>
      <hero-section></hero-section>
    </section>
    <section id="about-section" class="min-h-screen flex flex-col justify-center">
      <about-section></about-section>
    </section>
  </div>
</template>

<script>
import HeroSection from './sections/HeroSectionComponent'
import AboutSection from './sections/AboutSectionComponent'
// import SearchMe from './sections/SearchMeComponent'
export default {
  name: 'HomeComponent',
  components: {
    HeroSection,
    AboutSection
    // SearchMe
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
