import { createClient } from "./utils/contentful"
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
  modules: ["@nuxtjs/pwa", "@nuxtjs/sitemap", "bootstrap-vue/nuxt"],
  bootstrapVue: {
    bootstrapCSS: false
  },
  manifest: {
    background_color: "rgba(0,0,0,.7)",
    lang: "en-US",
    name: "Matyas Bittenbinder",
    display: "minimal-ui",
    short_name: "Bittenbinder",
    mobileApp: false
  },
  meta: {
    mobileApp: false,
    ogHost: "https://mbittenbinder.com/"
  },
  sitemap: {
    hostname: "https://mbittenbinder.com/"
  },
  build: {
    transpile: [/\bvue-awesome\b/],
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve("@nuxt/babel-preset-app"),
            {
              buildTarget: isServer ? "server" : "client",
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  },
  plugins: ["~/plugins/vue-awesome"],
  generate: {
    async routes() {
      const [albums, photos] = await Promise.all([
        cdaClient.getEntries({
          content_type: "albums"
        }),
        cdaClient.getEntries({
          content_type: "fotos"
        })
      ])
      return [
        ...albums.items.map(
          ({ fields: { slug } }) => `/photography/albums/${slug}`
        ),
        ...photos.items.map(({ fields: { slug } }) => `/photography/i/${slug}`)
      ]
    }
  }
}
