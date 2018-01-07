<template>
  <main>
    <b-container fluid>
      <div v-for="(album, index) in albums" :key="album.sys.id">
        <h1><b-link class="text-white" :to="'/photography/albums/'+album.fields.slug">{{ album.fields.titel }}</b-link></h1>
        <b-card-group columns class="mb30">
          <b-link 
            v-for="albumfoto in album.fields.fotosInAlbum"
            :key="albumfoto.sys.id"
            :to="{ name: 'photography-i-slug', params: { slug: albumfoto.fields.slug }}">
            <b-card bg-variant="dark" no-body>
              <b-img class="card-img"
                v-if="index == 0"
                fluid
                :src="albumfoto.fields.foto.fields.file.url + '?w=600&fit=fill&h=' + ((Math.ceil(albumfoto.fields.foto.fields.file.details.image.width / albumfoto.fields.foto.fields.file.details.image.height)) == 1 ? 650 : 350)"
                :alt="albumfoto.fields.foto.fields.title" />
              <b-img-lazy class="card-img"
                v-else
                fluid
                :src="albumfoto.fields.foto.fields.file.url + '?w=600&fit=fill&h=' + ((Math.ceil(albumfoto.fields.foto.fields.file.details.image.width / albumfoto.fields.foto.fields.file.details.image.height)) == 1 ? 650 : 350)"
                :alt="albumfoto.fields.foto.fields.title" />
            </b-card>
          </b-link>
        </b-card-group>
      </div>
    </b-container>
  </main>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import VueMarkdown from 'vue-markdown'

const client = createClient()

export default {
  head: {
    title: 'Mátyás Bittenbinder - Photography',
    meta: [
      { hid: 'description', name: 'description', content: 'All photographs by Mátyás Bittenbinder' }
    ]
  },
  asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'content_type': env.CTF_ALBUM
      })
    ]).then(([albums]) => {
      return {
        albums: albums.items
      }
    })
  },
  components: {
    VueMarkdown
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
