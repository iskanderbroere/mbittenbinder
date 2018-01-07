<template>
  <b-container fluid>
      <h1 class="text-white">{{ album.fields.titel }}</h1>
      <b-card-group columns class="mb30">
        <b-link 
            v-for="albumfoto in album.fields.fotosInAlbum"
            :key="albumfoto.sys.id"
            :to="{ name: 'photography-i-slug', params: { slug: albumfoto.fields.slug }}">
          <b-card :img-src="albumfoto.fields.foto.fields.file.url + '?w=600&fit=fill&h=' + ((Math.ceil(albumfoto.fields.foto.fields.file.details.image.width / albumfoto.fields.foto.fields.file.details.image.height)) == 1 ? 650 : 350)"
            :img-alt="albumfoto.fields.foto.fields.title"
            bg-variant="dark"
            class="text-center"
            border-variant="white"
            text-variant="white"
            img-fluid />
        </b-link>
      </b-card-group>
    </b-container>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  head () {
    return {
      title: `Mátyás Bittenbinder - ${this.album.fields.titel}`,
      meta: [
        { hid: 'description', name: 'description', content: 'Mátyás Bittenbinder' }
      ]
    }
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_ALBUM,
      'fields.slug': params.slug
    }).then(album => {
      return {
        album: album.items[0]
      }
    })
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
  transition-duration: .2s;
  transition-timing-function: ease-in-out;
}
.card:hover img {
  opacity: .7;
  transform: scale(.98)
}
</style>

