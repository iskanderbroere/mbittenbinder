<template>
  <b-container fluid>
    <h1 class="text-white">
      {{ album.fields.titel }}
    </h1>
    <b-card-group columns class="mb30">
      <b-link
        v-for="{
          sys: { id },
          fields: {
            slug,
            foto: {
              fields: {
                title,
                file: {
                  url,
                  details: {
                    image: { width, height }
                  }
                }
              }
            }
          }
        } in album.fields.fotosInAlbum"
        :key="id"
        :to="{
          name: 'photography-i-slug',
          params: { slug }
        }"
      >
        <b-card bg-variant="dark" no-body>
          <b-img-lazy
            :src="
              `${url}?w=600&fit=fill&h=${
                imageIsTallerThanWide({ width, height }) ? 650 : 350
              }`
            "
            :alt="title"
            class="card-img"
            fluid
          />
        </b-card>
      </b-link>
    </b-card-group>
  </b-container>
</template>

<script>
import { createClient } from "~/utils/contentful.js"
import { imageIsTallerThanWide } from "~/utils"
import { CONTENTFUL_ALBUM_TYPE } from "~/constants"

const client = createClient()

export default {
  async asyncData({ params: { slug } }) {
    const { items } = await client.getEntries({
      content_type: CONTENTFUL_ALBUM_TYPE,
      "fields.slug": slug
    })
    return {
      album: items[0]
    }
  },
  methods: {
    imageIsTallerThanWide: imageIsTallerThanWide
  },
  head() {
    return {
      title: `Mátyás Bittenbinder - ${this.album.fields.titel}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Mátyás Bittenbinder"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border: none;
  opacity: 1;
}
.card img {
  transition-property: opacity, transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}
.card:hover img {
  opacity: 0.7;
  transform: scale(0.98);
}
</style>
