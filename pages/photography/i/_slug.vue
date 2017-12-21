<template>
  <b-container>
    <b-img class="mb30 mx-auto d-block" :src="`${foto.fields.foto.fields.file.url}?w=950`" fluid :alt="foto.fields.foto.fields.title" />
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
        { itemprop: 'name', content: this.foto.fields.titel },
        { itemprop: 'description', content: this.foto.fields.beschrijving },
        { itemprop: 'image', content: 'https:' + this.foto.fields.foto.fields.file.url + '?w=950' },
        // Facebook / Open Graph
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: 'https://mbittenbinder.com' + `${this.$route.path}` },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: this.foto.fields.titel },
        { property: 'og:image', content: 'https:' + this.foto.fields.foto.fields.file.url + '?w=950' }
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
