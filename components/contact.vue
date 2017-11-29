<template>
  <b-jumbotron bg-variant="light" fluid :header-level="4">
    <template slot="header" class="mb30">
      Contact
    </template>
    <div class="row">
      <div class="col-md-8">
        <b-card class="mb30s" title="Contact form" title-tag="h2">
          <b-form id="contactForm" method='post' @submit.prevent="handleForm($event)" name="contact" data-netlify="true">
            <input type='hidden' :name='form-name' value='contact' />
            <b-form-group
              label="Name"
              label-for="name">
                <b-form-input
                  type="text"
                  v-model="name"
                  required
                  name="name" />
            </b-form-group>
            <b-form-group
              label="Email address"
              label-for="email">
              <b-form-input
                type="email"
                v-model="email"
                name="email"
                required />
            </b-form-group>
            <b-form-group label="Message" label-for="message">
              <b-form-textarea
                  v-model="message"
                  name="message"
                  type="textarea"
                  :rows="5"
                  :max-rows="10">
              </b-form-textarea>
            </b-form-group>
            <b-button type="submit" required variant="outline-primary" block>Send</b-button>
          </b-form>
        </b-card>
      </div>
      <div class="col-md-4">
        <address>
          <b-card title="Contact details" title-tag="h2">
            <dl>
              <dt>Email address</dt>
              <dd><a href="mailto:mbittenbinder@gmail.com">mbittenbinder@gmail.com</a></dd>
              <dt>Phone number</dt>
              <dd><a href="tel:0031631219802">+31 6 12345678</a></dd>
              <dt>Webdesign</dt>
              <dd><a href="mailto:iskanderbroere@gmail.com">iskanderbroere@gmail.com</a></dd>
              <dt>Sitemap</dt>
              <dd><nuxt-link to="/sitemap">Sitemap</nuxt-link></dd>
            </dl>
          </b-card>
        </address>
      </div>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  data () {
    return {
      'form-name': 'contact',
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    handleForm ($event) {
      $event.preventDefault()
      let body = {
        'form-name': 'contact',
        name: this.name,
        email: this.email,
        message: this.message
      }
      this.$http.options.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      this.$http.post('/thank-you', body, {
        emulateJSON: true
      }).then(response => {
        this.$router.push('/thank-you')
      }, response => {})
    }
  }
}
</script>