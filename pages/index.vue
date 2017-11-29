<template>
  <b-container>
    <b-row>
      <div class="col-12 mb30">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper my-swiper">
            <div class="swiper-slide" v-for="banner in albums" :key="banner.sys.id">
              <b-card
                no-body
                border-variant="white"
                header-tag="header">
                <b-img :src="`${banner.fields.fotosInAlbum[0].fields.foto.fields.file.url}?w=1885&h=1080&f=bottom&fit=fill`" :alt="banner.fields.fotosInAlbum[0].fields.foto.fields.title" class="card-img-bottom" fluid-grow />
              <!-- <div slot="header"><h1>{{ banner.fields.titel }}</h1><p class="text-muted">{{ banner.fields.beschrijving }}</p></div> -->
              </b-card>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-white swiper-pagination-bullets"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </div>
      </div>
      <!-- <div class="col-md-6 offset-md-3 mb30">
        <vue-markdown>{{flip.fields.overFlip}}</vue-markdown>
      </div> -->
    </b-row>
  </b-container>
</template>
<script>
import {createClient} from '~/plugins/contentful'
import VueMarkdown from 'vue-markdown'

const client = createClient()

export default {
  asyncData ({ env }) {
    return Promise.all([
      client.getEntries({
        'content_type': env.CTF_ALBUM
      })
    ]).then(([albums]) => {
      return {
        albums: albums.items,
        swiperOption: {
          autoplay: 5000,
          initialSlide: 0,
          direction: 'horizontal',
          setWrapperSize: true,
          keyboardControl: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          paginationElement: 'li',
          preloadImages: false,
          spaceBetween: 30,
          lazyLoading: true,
          loop: true,
          speed: 800
        }
      }
    }).catch(console.error)
  },
  components: {
    VueMarkdown
  }
}
</script>

<style lang="scss" scoped>
img {
  max-height: 70vh;
  object-fit: cover;
}
</style>