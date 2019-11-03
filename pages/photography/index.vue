<template>
  <b-container fluid>
    <div v-for="(album, index) in albums" :key="album.sys.id">
      <h1>
        <b-link
          :to="'/photography/albums/' + album.fields.slug"
          class="text-white"
        >
          {{ album.fields.titel }}
        </b-link>
      </h1>
      <b-card-group columns class="mb30">
        <b-link
          v-for="albumfoto in album.fields.fotosInAlbum"
          :key="albumfoto.sys.id"
          :to="{
            name: 'photography-i-slug',
            params: { slug: albumfoto.fields.slug }
          }"
        >
          <b-card bg-variant="dark" no-body>
            <b-img
              v-if="index === 0"
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
              :width="600"
              :height="
                Math.ceil(
                  albumfoto.fields.foto.fields.file.details.image.width /
                    albumfoto.fields.foto.fields.file.details.image.height
                ) == 1
                  ? 650
                  : 350
              "
              fluid-grow
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
              :width="600"
              :height="
                Math.ceil(
                  albumfoto.fields.foto.fields.file.details.image.width /
                    albumfoto.fields.foto.fields.file.details.image.height
                ) == 1
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
import { CONTENTFUL_ALBUM_TYPE } from "~/constants"

const client = createClient()

export default {
  head: {
    title: "Mátyás Bittenbinder - Photography",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "All photographs by Mátyás Bittenbinder"
      }
    ]
  },
  async asyncData() {
    const { items } = await client.getEntries({
      content_type: CONTENTFUL_ALBUM_TYPE
    })
    return {
      albums: items
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
