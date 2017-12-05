<template>
<main>
  <b-container>
    <div v-for="album in albums" :key="album.sys.id">
      <h1 class="text-white">{{ album.fields.titel }}</h1>
      <b-card-group columns class="mb30">
        <b-card v-for="albumfoto in album.fields.fotosInAlbum"
          :key="albumfoto.sys.id"
          :img-src="albumfoto.fields.foto.fields.file.url + '?w=600&fit=fill&h=' + ((Math.ceil(albumfoto.fields.foto.fields.file.details.image.width / albumfoto.fields.foto.fields.file.details.image.height)) == 1 ? 900 : 400)"
          :img-alt="albumfoto.fields.foto.fields.title"
          bg-variant="dark"
          class="text-center"
          border-variant="white"
          text-variant="white"
          img-fluid>
          <p class="card-text">{{ albumfoto.fields.beschrijving }}</p>
          <b-btn variant="outline-light" size="lg" block :to="{ name: 'photography-i-slug', params: { slug: albumfoto.fields.slug }}">{{ albumfoto.fields.titel }}</b-btn>
        </b-card>
      </b-card-group>
    <!-- <b-pagination-nav v-if="fotos.length > perPage"
      hide-goto-end-buttons
      class="mb30"
      align="center"
      base-url="#"
      aria-controls="Photo gallery pagination"
      :number-of-pages="Math.ceil((fotos.length / perPage))"
      v-model="currentPage" /> -->
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
      { hid: 'description', name: 'description', content: 'Mátyás Bittenbinder' }
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
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
.card:hover {
  box-shadow: 0 10px 10px -10px #343a40;
}
</style>
