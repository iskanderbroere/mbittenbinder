<template>
  <contact />
</template>

<script>
import contact from '~/components/contact'

export default {
  head () {
    return {
      title: 'Mátyás Bittenbinder - Contact',
      meta: [
        { hid: 'description', name: 'description', content: 'Contact form and contact details' }
      ]
    }
  },
  components: {
    contact
  }
}
</script>