<template>
  <b-container fluid>
    <b-row>
      <div class="col-12 mb30">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper my-swiper">
            <div class="swiper-slide" v-for="banner in albums" :key="banner.sys.id">
              <b-card
                bg-variant="dark"
                class="text-center"
                no-body
                text-variant="white"
                border-variant="white"
                header-tag="header">
                <div class="card-body">
                  <h1 class="card-title">{{ banner.fields.titel }}</h1>
                  <!-- <p class="card-text font-italic">{{ banner.fields.beschrijving }}</p> -->
                  <b-btn variant="outline-light" size="sm" :to="`/photography/albums/${banner.fields.slug}`">More</b-btn>
                </div>
                <div class="swiper-zoom-container">
                  <b-img :src="`${banner.fields.slideImage.fields.file.url}?w=942&h=540&fit=fill`" :alt="banner.fields.slideImage.fields.title" class="card-img-bottom" fluid-grow />
                </div>
              </b-card>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
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
          autoplay: {
            delay: 3500
          },
          initialSlide: 0,
          direction: 'horizontal',
          autoHeight: true,
          setWrapperSize: true,
          keyboard: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: albums.items.length > 8
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          spaceBetween: 30,
          loop: true,
          speed: 800
        }
      }
    })
  },
  components: {
    VueMarkdown
  },
  head: {
    meta: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Mátyás Bittenbinder' }
    ]
  }
}
</script>

<style lang="scss" scoped>
.card-img-bottom {
  max-height: 70vh;
  object-fit: cover;
}
</style>
