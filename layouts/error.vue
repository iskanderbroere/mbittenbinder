<template>
  <main>
    <Navigation />
    <b-container class="container-top">
      <h1 v-if="error.statusCode === 404">Pagina niet gevonden</h1>
      <h1 v-else>Er is een fout opgetreden</h1>
      <a href="https://jolienwesselink.nl/">Terug naar de home pagina</a>
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
