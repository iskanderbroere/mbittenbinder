import { createClient } from "./plugins/contentful"
const cdaClient = createClient()

export default {
  head: {
    htmlAttrs: {
      lang: "en",
      dir: "ltr"
    },
    title: "Mátyás Bittenbinder",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Mátyás Bittenbinder"
      }
    ]
  },
  loading: {
    color: "#212529",
    failedColor: "#d9534f",
    height: "2px"
  },
  css: [
    "bootstrap-vue/dist/bootstrap-vue",
    "~/assets/fontfaces.css",
    { src: "~/assets/main.scss", lang: "scss" }
  ],
  modules: [
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
    ["bootstrap-vue/nuxt", { css: false }]
  ],
  manifest: {
    background_color: "rgba(0,0,0,.7)",
    lang: "en-US",
    name: "Matyas Bittenbinder",
    display: "minimal-ui",
    short_name: "M. Bittenbinder",
    mobileApp: false
  },
  meta: {
    mobileApp: false,
    ogHost: "https://mbittenbinder.com/"
  },
  sitemap: {
    hostname: "https://mbittenbinder.com/",
    generate: true
  },
  build: {
    transpile: [/\bvue-awesome\b/],
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    "~/plugins/contentful",
    "~/plugins/vue-awesome",
    { src: "~/plugins/vue-resource", ssr: false }
  ],
  generate: {
    async routes() {
      const [albums, fotos] = await Promise.all([
        cdaClient.getEntries({
          content_type: "albums"
        }),
        cdaClient.getEntries({
          content_type: "fotos"
        })
      ])
      return [
        ...albums.items.map(
          album => `/photography/albums/${album.fields.slug}`
        ),
        ...fotos.items.map(foto => `/photography/i/${foto.fields.slug}`)
      ]
    }
  },
  env: {
    CTF_FOTO_POST_TYPE_ID: "fotos",
    CTF_ALBUM: "albums"
  }
}
