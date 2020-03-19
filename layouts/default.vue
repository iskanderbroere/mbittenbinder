<template>
  <div>
    <navigation />
    <main class="container-top">
      <nuxt />
    </main>
    <footer>
      <p class="text-white font-weight-bold" style="text-align:center;">
        &copy; M&aacute;ty&aacute;s Bittenbinder -
        {{ new Date().getFullYear() }}
      </p>
    </footer>
  </div>
</template>

<script>
import navigation from "~/components/navigation.vue"

export default {
  components: {
    navigation
  }
}
</script>
