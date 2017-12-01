<template>
  <main>
    <Navigation />
    <b-container class="container-top">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error has occured</h1>
      <a href="https://mbittenbinder.com/">Back to the homepage</a>
    </b-container>
  </main>
</template>

<script>
import Navigation from '~/components/navigation1.vue'

export default {
  components: {
    Navigation
  },
  props: ['error']
}
</script>
