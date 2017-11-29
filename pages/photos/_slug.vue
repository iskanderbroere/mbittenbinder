<template>
  <b-container>
    <b-img class="mb30" :src="foto.fields.foto.fields.file.url" fluid-grow :alt="foto.fields.foto.fields.title" />
    <h1 class="text-white text-center">{{ foto.fields.titel}}</h1>
    <p class="text-white text-center">{{ foto.fields.beschrijving }}</p>
  </b-container>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  head () {
    return {
      title: `Mátyás Bittenbinder - Photos - ${this.foto.fields.titel}`,
      meta: [
        { hid: 'description', name: 'description', content: 'Mátyás Bittenbinder' }
      ]
    }
  },
  layout: 'default-en',
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

<style>

</style>
