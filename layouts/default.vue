<template>
  <div>
    <navigation />
    <main class="container-top">
      <nuxt />
    </main>
    <footer>
      <p class="text-white font-weight-bold" style="text-align:center;">&copy; M&aacute;ty&aacute;s Bittenbinder - 2017</p>
      <no-ssr>
        <CookieLaw
          button-class="btn btn-lg btn-primary" />
      </no-ssr>
    </footer>
  </div>
</template>

<script>
import navigation from "~/components/navigation1.vue"
import CookieLaw from "vue-cookie-law"

export default {
  components: {
    navigation,
    CookieLaw
  }
}
</script>
