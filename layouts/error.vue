<template>
  <b-container class="container-top">
    <h1 v-if="error.statusCode === 404" class="text-white">
      Page not found
    </h1>
    <h1 v-else class="text-white">
      An error has occured
    </h1>
    <a class="text-white" href="https://mbittenbinder.com/"
      >Back to the homepage</a
    >
  </b-container>
</template>

<script>
export default {
  props: {
    error: {
      type: [Error, Object],
      required: true
    }
  }
}
</script>
