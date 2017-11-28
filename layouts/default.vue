<template>
  <main>
    <navigation />
    <div class="container-top">
      <nuxt />
    </div>
    <footer>
      <no-ssr>
        <CookieLaw
          message="Om deze website goed te laten werken worden er cookies gebruikt."
          buttonClass="btn btn-lg btn-primary"
          buttonText="Ik snap het!" />
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
      lang: 'nl-NL'
    }
  },
  manifest: {
    lang: 'nl-NL'
  },
  components: {
    navigation,
    CookieLaw
  }
}
</script>

<style>

</style>
