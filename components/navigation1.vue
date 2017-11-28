<template>
  <b-navbar class="sticky-top mb30" toggleable="md" type="light" variant="light">
      <!-- <b-navbar-brand class="headtitle text-uppercase">M&Aacute;ty&Aacute;s Bittenbinder</b-navbar-brand> -->
      <b-navbar-toggle class="mx-auto" target="nav_collapse" />
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="mx-auto">
        <b-nav-item active-class="" exact-active-class="active" class="my-auto" to="/"><icon class="m-2" name="home" scale="1.5" /></b-nav-item>
        <b-nav-item active-class="" exact-active-class="active" class="my-auto" to="/photos"><icon class="m-2" name="camera-retro" scale="1.5" /></b-nav-item>
        <b-nav-item active-class="" exact-active-class="active" class="my-auto" to="/contact"><icon class="m-2" name="info" scale="1.5" /></b-nav-item>
        <b-nav-text class="headtitle text-uppercase">M&Aacute;ty&Aacute;s Bittenbinder</b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Navbartoggler from '~/components/navbartoggler.vue'

export default {
  components: {
    Navbartoggler
  }
}
</script>
<style scoped lang="scss">
.active {
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid #212931;
  box-shadow: inset 0 -2px 0px 0px #212931;
}
.fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}
</style>
