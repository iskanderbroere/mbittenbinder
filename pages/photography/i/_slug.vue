<template>
  <b-container>
    <b-img :src="`${foto.fields.foto.fields.file.url}?w=950`" :alt="foto.fields.foto.fields.title" class="mb30 mx-auto d-block" fluid />
    <h1 class="text-white text-center">{{ foto.fields.titel }}</h1>
    <p class="text-white text-center">{{ foto.fields.beschrijving }}</p>
  </b-container>
</template>

<script>
import { createClient } from "~/plugins/contentful.js"

const client = createClient()

export default {
  head() {
    return {
      title: `Mátyás Bittenbinder - ${this.foto.fields.titel}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.foto.fields.beschrijving}`
        },
        // Google+ / Schema.org
        { itemprop: "name", content: this.foto.fields.titel },
        { itemprop: "description", content: this.foto.fields.beschrijving },
        {
          itemprop: "image",
          content: "https:" + this.foto.fields.foto.fields.file.url + "?w=950"
        },
        // Facebook / Open Graph
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content: "https://mbittenbinder.com" + `${this.$route.path}`
        },
        { property: "og:locale", content: "en_US" },
        { property: "og:title", content: this.foto.fields.titel },
        {
          property: "og:image",
          content: "https:" + this.foto.fields.foto.fields.file.url + "?w=950"
        },
        {
          property: "og:description",
          content: this.foto.fields.beschrijving
            ? this.foto.fields.beschrijving
            : this.foto.fields.titel
        }
      ]
    }
  },
  async asyncData({ env, params }) {
    const { items } = await client.getEntries({
      content_type: env.CTF_FOTO_POST_TYPE_ID,
      "fields.slug": params.slug
    })
    return {
      foto: items[0]
    }
  }
}
</script>
