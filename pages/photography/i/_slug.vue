<template>
  <b-container>
    <b-img
      :src="`${photo.fields.foto.fields.file.url}?w=950`"
      :alt="photo.fields.foto.fields.title"
      class="mb30 mx-auto d-block"
      fluid
    />
    <h1 class="text-white text-center">
      {{ photo.fields.titel }}
    </h1>
    <p class="text-white text-center">
      {{ photo.fields.beschrijving }}
    </p>
  </b-container>
</template>

<script>
import { createClient } from "~/utils/contentful.js"
import { CONTENTFUL_PHOTO_TYPE } from "~/constants"

const client = createClient()

export default {
  head() {
    return {
      title: `Mátyás Bittenbinder - ${this.photo.fields.titel}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.photo.fields.beschrijving}`
        },
        // Google+ / Schema.org
        { itemprop: "name", content: this.photo.fields.titel },
        { itemprop: "description", content: this.photo.fields.beschrijving },
        {
          itemprop: "image",
          content: "https:" + this.photo.fields.foto.fields.file.url + "?w=950"
        },
        // Facebook / Open Graph
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content: "https://mbittenbinder.com" + `${this.$route.path}`
        },
        { property: "og:locale", content: "en_US" },
        { property: "og:title", content: this.photo.fields.titel },
        {
          property: "og:image",
          content: "https:" + this.photo.fields.foto.fields.file.url + "?w=950"
        },
        {
          property: "og:description",
          content: this.photo.fields.beschrijving
            ? this.photo.fields.beschrijving
            : this.photo.fields.titel
        }
      ]
    }
  },
  async asyncData({ params: { slug } }) {
    const { items } = await client.getEntries({
      content_type: CONTENTFUL_PHOTO_TYPE,
      "fields.slug": slug
    })
    return {
      photo: items[0]
    }
  }
}
</script>
