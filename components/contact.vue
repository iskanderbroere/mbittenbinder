<template>
  <b-jumbotron :header-level="4" bg-variant="light" fluid>
    <template slot="header" class="mb30">
      Contact
    </template>
    <div class="row">
      <div class="col-md-8">
        <b-card class="mb30s" title="Contact form" title-tag="h2">
          <b-form id="contactForm" method="post" name="contact" data-netlify="true" @submit.prevent="handleForm">
            <input type="hidden" name="form-name" value="contact form" >
            <b-form-group
              label="Name"
              label-for="name">
              <b-form-input
                v-model="name"
                type="text"
                required
                name="name" />
            </b-form-group>
            <b-form-group
              label="Email address"
              label-for="email">
              <b-form-input
                v-model="email"
                type="email"
                name="email"
                required />
            </b-form-group>
            <b-form-group label="Message" label-for="message">
              <b-form-textarea
                v-model="message"
                :rows="5"
                :max-rows="10"
                name="message"
                type="textarea"/>
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
              <dd><a href="mailto:info@mbittenbinder.com">info@mbittenbinder.com</a></dd>
              <dt>Webdesign</dt>
              <dd><a href="mailto:iskanderbroere@gmail.com">iskanderbroere@gmail.com</a></dd>
            </dl>
          </b-card>
        </address>
      </div>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  data() {
    return {
      "form-name": "contact",
      name: "",
      email: "",
      message: ""
    }
  },
  methods: {
    handleForm() {
      const body = {
        "form-name": "contact",
        name: this.name,
        email: this.email,
        message: this.message
      }
      this.$http.options.headers = {
        "Content-Type": "application/x-www-form-urlencoded"
      }
      this.$http
        .post("/thank-you", body, {
          emulateJSON: true
        })
        .then(
          () => {
            this.$router.push("/thank-you")
          },
          () => {}
        )
    }
  }
}
</script>
