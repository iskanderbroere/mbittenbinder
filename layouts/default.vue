<template>
  <main>
    <navigation />
    <div class="container-top">
      <nuxt />
    </div>
    <footer>
      <p class="text-white font-weight-bold" style="text-align:center;">&copy; M&aacute;ty&aacute;s Bittenbinder - 2017</p>
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
