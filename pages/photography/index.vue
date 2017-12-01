<template>
<main>
  <b-container>
    <b-card-group columns class="mb30" id="Photo gallery pagination">
      <b-card :key="foto.sys.id"
        v-for="foto in limitBy(fotos, perPage, ((currentPage - 1)* perPage))"
        :img-src="foto.fields.foto.fields.file.url + '?w=600&fit=fill&h=' + ((Math.ceil(foto.fields.foto.fields.file.details.image.width / foto.fields.foto.fields.file.details.image.height)) == 1 ? 900 : 400)"
        :img-alt="foto.fields.foto.fields.title"
        bg-variant="dark"
        class="text-center"
        border-variant="white"
        text-variant="white"
        img-fluid>
        <p class="card-text">{{ foto.fields.beschrijving }}</p>
        <b-btn variant="outline-light" size="lg" block :to="{ name: 'photography-slug', params: { slug: foto.fields.slug }}">{{ foto.fields.titel }}</b-btn>
      </b-card>
    </b-card-group>
    <b-pagination-nav v-if="fotos.length > perPage"
      hide-goto-end-buttons
      class="mb30"
      align="center"
      base-url="#"
      aria-controls="Photo gallery pagination"
      :number-of-pages="Math.ceil((fotos.length / perPage))"
      v-model="currentPage" />
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
        'content_type': env.CTF_FOTO_POST_TYPE_ID,
        order: 'sys.updatedAt'
      })
    ]).then(([fotos]) => {
      return {
        fotos: fotos.items,
        currentPage: 1,
        perPage: 6
      }
    }).catch(console.error)
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
