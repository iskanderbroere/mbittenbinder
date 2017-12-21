<template>
  <b-container>
    <b-img class="mb30 mx-auto d-block" :src="foto.fields.foto.fields.file.url" fluid :alt="foto.fields.foto.fields.title" />
    <h1 class="text-white text-center">{{ foto.fields.titel }}</h1>
    <p class="text-white text-center">{{ foto.fields.beschrijving }}</p>
  </b-container>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  head () {
    return {
      title: `Mátyás Bittenbinder - ${this.foto.fields.titel}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.foto.fields.beschrijving}` },
        // Google+ / Schema.org
        { itemprop: 'name', content: `${this.foto.fields.titel}` },
        { itemprop: 'description', content: `${this.foto.fields.beschrijving}` },
        { itemprop: 'image', content: `${this.foto.fields.foto.fields.file.url}` },
        // Facebook / Open Graph
        { p: 'og:type', content: 'article' },
        { p: 'og:url', content: 'https://mbittenbinder.com' + `${this.$route.fullPath}` },
        { p: 'og:locale', content: 'en_US' },
        { p: 'og:title', content: `${this.foto.fields.titel}` },
        { p: 'og:image', c: `${this.foto.fields.foto.fields.file.url}` }
      ]
    }
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_FOTO_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(foto => {
      return {
        foto: foto.items[0]
      }
    })
  }
}
</script>

<style lang="scss" scoped>
img {
  max-height: 80vh;
}
</style>
