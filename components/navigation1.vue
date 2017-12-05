<template>
  <b-navbar sticky class="mb30" toggleable="md" type="light" variant="light">
    <b-container>
        <b-navbar-toggle class="mx-auto" target="nav_collapse" />
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item active-class="" exact-active-class="active" class="my-auto py-0" to="/">Home</b-nav-item>
          <b-nav-item class="my-auto py-0" to="/photography">Photography</b-nav-item>
          <b-nav-item-dropdown text="Photography">
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item active-class="" exact-active-class="active" class="my-auto py-0" to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item active-class="" exact-active-class="active" class="my-auto py-0" href="https://www.instagram.com/mbittenbinder/" target="_blank"><icon class="mx-2 align-middle" name="instagram" scale="1.4" /></b-nav-item>
          <b-nav-item active-class="" exact-active-class="active" class="my-auto py-0" href="https://www.linkedin.com/in/matyas-bittenbinder-86631987" target="_blank"><icon class="mx-2 align-middle" name="linkedin-square" scale="1.4" /></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
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
