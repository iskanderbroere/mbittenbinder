const {getConfigForKeys} = require('./lib/config.js')
const nodeExternals = require('webpack-node-externals')
const ctfConfig = getConfigForKeys([
  'CTF_FOTO_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CMA_ACCESS_TOKEN',
  'CTF_ALBUM'
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

const config = {
  head: {
    title: 'Mátyás Bittenbinder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mátyás Bittenbinder' }
    ]
  },
  loading: {
    color: '#212529',
    failedColor: '#d9534f',
    height: '2px'
  },
  dev: (process.env.NODE_ENV !== 'production'),
  css: [
    { src: '~assets/main.scss', lang: 'scss' }
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  manifest: {
    background_color: 'rgba(0,0,0,.7)',
    name: 'Matyas Bittenbinder',
    short_name: 'M. Bittenbinder',
    mobileApp: false
  },
  meta: {
    mobileApp: false,
    ogType: null,
    ogTitle: null,
    ogDescription: null
  },
  sitemap: {
    hostname: 'https://mbittenbinder.com/',
    generate: true
  },
  cache: true,
  build: {
    extend (config, ctx) {
      const vueLoader = config.module.rules.find(r => r.loader === 'vue-loader')
      vueLoader.options.transformToRequire = {
        img: 'src',
        image: 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'img-src',
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      } else {
        config.externals = [ nodeExternals({
          whitelist: [/\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
        })]
      }
    },
    postcss: {
      plugins: {
        'autoprefixer': {
          browsers: ['> 5%']
        },
        'postcss-flexbugs-fixes': true
      }
    },
    vendor: [
      '~/plugins/vue-resource',
      '~/plugins/vue-awesome',
      '~/plugins/bootstrap',
      '~/plugins/contentful',
      '~/plugins/vue-awesome-swiper'
    ]
  },
  plugins: [
    '~/plugins/contentful',
    '~/plugins/bootstrap',
    '~/plugins/vue-awesome',
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
    { src: '~/plugins/vue-resource', ssr: false }
  ],
  generate: {
    routes () {
      return Promise.all([
        cdaClient.getEntries({
          'content_type': ctfConfig.CTF_ALBUM
        }),
        cdaClient.getEntries({
          'content_type': ctfConfig.CTF_FOTO_POST_TYPE_ID
        })
      ]).then(([albums, fotos]) => {
        return [
          ...albums.items.map(album => `/photography/albums/${album.fields.slug}`),
          ...fotos.items.map(foto => `/photography/i/${foto.fields.slug}`)
        ]
      })
    }
  },
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CMA_ACCESS_TOKEN: ctfConfig.CTF_CMA_ACCESS_TOKEN,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_FOTO_POST_TYPE_ID: ctfConfig.CTF_FOTO_POST_TYPE_ID,
    CTF_ALBUM: ctfConfig.CTF_ALBUM
  }
}

module.exports = config
