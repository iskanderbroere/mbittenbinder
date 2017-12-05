<template>
  <main>
    <b-navbar class="d-none d-md-flex" type="dark" variant="dark">
      <b-navbar-brand class="mx-auto headtitle text-uppercase">M&Aacute;ty&Aacute;s Bittenbinder</b-navbar-brand>
    </b-navbar>
    <navigation />
    <div class="container-top">
      <nuxt />
    </div>
    <footer>
      <no-ssr>
        <CookieLaw
          buttonClass="btn btn-lg btn-primary" />
      </no-ssr>
    </footer>
  </main>
</template>

<script>
import navigation from '~/components/navigation1.vue'
import CookieLaw from 'vue-cookie-law'
export default {
  metaInfo: {
    htmlAttrs: {
      lang: 'en'
    }
  },
  manifest: {
    lang: 'en'
  },
  components: {
    navigation,
    CookieLaw
  }
}
</script>

<style>

</style>
