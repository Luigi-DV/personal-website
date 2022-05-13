<template>
  <div class="min-h-screen pt-16 pb-12 flex flex-col bg-white dark:bg-gray-900">
    <main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-16">
        <div class="text-center">
          <p class="text-sm font-semibold text-primary-color dark:text-secondary-color uppercase tracking-wide">404 error</p>
          <h1 class="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-200 tracking-tight sm:text-5xl">Page not found.</h1>
          <p class="mt-2 text-base text-gray-500 dark:text-gray-400">Sorry, we couldn’t find the page you’re looking for.</p>
          <div class="mt-6">
            <router-link to="/" class="text-base font-medium text-primary-color hover:text-green-600 dark:text-secondary-color">Go back home<span aria-hidden="true"> &rarr;</span></router-link>
          </div>
        </div>
      </div>
    </main>
    <footer class="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex justify-center space-x-4">
        <span class="inline-block border-l border-gray-300" aria-hidden="true" />
        <a :href="githubRepo" class="text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400">Github Repository</a>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PageNotFoundComponent',
  data () {
    return {
      githubRepo: 'https://github.com/Luigi-DV/personal-website'
    }
  }
}
</script>

<style scoped>

</style>
