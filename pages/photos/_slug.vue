<template>
  <b-container>
    <h1>{{ foto.fields.titel}}</h1>
    <b-img class="mb30" :src="foto.fields.foto.fields.file.url" fluid-grow :alt="foto.fields.foto.fields.title" />
  </b-container>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  head: {
    title: 'Mátyás Bittenbinder',
    meta: [
      { hid: 'description', name: 'description', content: 'Mátyás Bittenbinder' }
    ]
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
