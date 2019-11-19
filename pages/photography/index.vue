<template>
  <b-container fluid>
    <div
      v-for="{
        fields: { slug: albumSlug, titel: albumTitel, fotosInAlbum },
        sys: { id: albumId }
      } in albums"
      :key="albumId"
    >
      <h1>
        <b-link :to="`/photography/albums/${albumSlug}`" class="text-white">
          {{ albumTitel }}
        </b-link>
      </h1>
      <b-card-group columns class="mb30">
        <b-link
          v-for="{
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
            },
            sys: { id }
          } in fotosInAlbum"
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
                  imageIsTallerThanWide({
                    width,
                    height
                  })
                    ? 650
                    : 350
                }`
              "
              :alt="title"
              :width="600"
              :height="
                imageIsTallerThanWide({
                  width,
                  height
                })
                  ? 650
                  : 350
              "
              blank-color="black"
              fluid-grow
              class="card-img"
              fluid
            />
          </b-card>
        </b-link>
      </b-card-group>
    </div>
  </b-container>
</template>

<script>
import { createClient } from "~/utils/contentful.js"
import { imageIsTallerThanWide } from "~/utils"
import { CONTENTFUL_ALBUM_TYPE } from "~/constants"

const client = createClient()

export default {
  async asyncData() {
    const { items } = await client.getEntries({
      content_type: CONTENTFUL_ALBUM_TYPE
    })
    return {
      albums: items
    }
  },
  methods: {
    imageIsTallerThanWide: imageIsTallerThanWide
  },
  head: {
    title: "Mátyás Bittenbinder - Photography",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "All photographs by Mátyás Bittenbinder"
      }
    ]
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
