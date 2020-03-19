<template>
  <b-container fluid>
    <b-row>
      <div class="col-12 mb30">
        <b-carousel
          v-model="slide"
          :interval="3500"
          controls
          indicators
          background="#ababab"
          img-width="1980"
          img-height="1080"
        >
          <b-carousel-slide
            v-for="{
              sys: { id },
              fields: {
                slideImage: {
                  fields: {
                    title,
                    file: { url }
                  }
                },
                slug,
                titel
              }
            } in albums"
            :key="id"
          >
            <b-img-lazy
              slot="img"
              :alt="title"
              :src="`${url}?w=1980&h=1080&fit=fill`"
              fluid
            />
            <b-link
              :to="`photography/albums/${slug}`"
              class="text-white text-shadow"
            >
              <h3>{{ titel }}</h3>
            </b-link>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </b-row>
  </b-container>
</template>
<script>
import { createClient } from "~/utils/contentful"
import { CONTENTFUL_ALBUM_TYPE } from "~/constants"

const client = createClient()

export default {
  async asyncData() {
    const { items: albums } = await client.getEntries({
      content_type: CONTENTFUL_ALBUM_TYPE
    })
    return {
      albums
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
.text-shadow {
  text-shadow: 1px 1px 2px #333;
}
</style>
