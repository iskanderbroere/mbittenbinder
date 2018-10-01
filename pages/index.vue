<template>
  <b-container fluid>
    <b-row>
      <div class="col-12 mb30">
        <b-carousel
          id="carousel1"
          :interval="3500"
          v-model="slide"
          style="text-shadow: 1px 1px 2px #333;"
          controls
          indicators
          background="#ababab"
          img-width="1980"
          img-height="1080">
          <b-carousel-slide
            v-for="banner in albums" :key="banner.sys.id"
            :img-alt="banner.fields.slideImage.fields.title"
            :img-src="`${banner.fields.slideImage.fields.file.url}?w=1980&h=1080&fit=fill`">
            <b-link :to="`photography/albums/${banner.fields.slug}`" class="text-white"><h3>{{ banner.fields.titel }}</h3></b-link>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </b-row>
  </b-container>
</template>
<script>
import { createClient } from "~/plugins/contentful"

const client = createClient()

export default {
  async asyncData({ env }) {
    const { items } = await client.getEntries({
      content_type: env.CTF_ALBUM
    })
    return {
      albums: items
    }
  },
  data() {
    return {
      slide: 0
    }
  },
  head: {
    meta: [
      { itemprop: "name", content: "Mátyás Bittenbinder" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Mátyás Bittenbinder" }
    ]
  }
}
</script>

<style lang="scss" scoped>
.card {
  border: none;
}
.card-img-bottom {
  max-height: 85vh;
  object-fit: cover;
}
</style>
