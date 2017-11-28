import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const dateTimeFormats = {
  'nl': {
    short: {
      year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  'en': {
    short: {
      year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    }
  }
}

export default ({ app, isClient, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    dateTimeFormats: dateTimeFormats,
    fallbackLocale: 'nl'
  })
}
