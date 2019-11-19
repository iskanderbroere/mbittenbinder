<template>
  <b-container fluid>
    <h1 class="text-white">
      {{ album.fields.titel }}
    </h1>
    <b-card-group columns class="mb30">
      <b-link
        v-for="(albumfoto, index) in album.fields.fotosInAlbum"
        :key="albumfoto.sys.id"
        :to="{
          name: 'photography-i-slug',
          params: { slug: albumfoto.fields.slug }
        }"
      >
        <b-card bg-variant="dark" no-body>
          <b-img-lazy
            v-if="index <= 5"
            :src="
              albumfoto.fields.foto.fields.file.url +
                '?w=600&fit=fill&h=' +
                (Math.ceil(
                  albumfoto.fields.foto.fields.file.details.image.width /
                    albumfoto.fields.foto.fields.file.details.image.height
                ) == 1
                  ? 650
                  : 350)
            "
            :alt="albumfoto.fields.foto.fields.title"
            class="card-img"
            fluid
          />
          <b-img-lazy
            v-else
            :src="
              albumfoto.fields.foto.fields.file.url +
                '?w=600&fit=fill&h=' +
                (Math.ceil(
                  albumfoto.fields.foto.fields.file.details.image.width /
                    albumfoto.fields.foto.fields.file.details.image.height
                ) == 1
                  ? 650
                  : 350)
            "
            :alt="albumfoto.fields.foto.fields.title"
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
