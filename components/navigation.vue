<template>
  <b-navbar sticky class="mb30" toggleable="md" type="light" variant="light">
    <b-container fluid>
      <b-navbar-brand class="text-uppercase d-md-none">
        M&aacute;ty&aacute;s Bittenbinder
      </b-navbar-brand>
      <b-navbar-toggle class="ml-auto" target="nav_collapse" />
      <b-collapse id="nav_collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            active-class=""
            exact-active-class="active"
            class="my-auto py-0"
            to="/"
          >
            Home
          </b-nav-item>
          <b-nav-item
            class="my-auto py-0"
            active-class=""
            exact-active-class="active"
            to="/photography"
          >
            Photography
          </b-nav-item>
          <b-nav-item
            active-class=""
            exact-active-class="active"
            class="my-auto py-0"
            to="/contact"
          >
            Contact
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-text tag="li" class="my-auto py-0 d-none d-md-block">
            M&aacute;ty&aacute;s Bittenbinder
          </b-nav-text>
          <b-nav-item
            class="my-auto py-0"
            href="https://www.instagram.com/mbittenbinderphotos/"
            target="_blank"
          >
            <icon
              aria-label="go to instagram"
              class="mx-1 align-middle"
              name="brands/instagram"
              scale="1.5"
            />
          </b-nav-item>
          <b-nav-item
            class="my-auto py-0"
            href="https://www.linkedin.com/in/matyas-bittenbinder-86631987"
            target="_blank"
          >
            <icon
              aria-label="go to linkedin"
              class="mx-1 align-middle"
              name="brands/linkedin"
              scale="1.5"
            />
          </b-nav-item>
          <b-nav-item
            class="my-auto py-0"
            href="https://twitter.com/MBittenbinder"
            target="_blank"
          >
            <icon
              aria-label="go to twitter"
              class="mx-1 align-middle"
              name="brands/twitter-square"
              scale="1.5"
            />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<style scoped lang="scss">
.container-fluid {
  padding-left: 0;
  padding-right: 0;
}
.active {
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: inset 0 -3px 0px 0px #212529;
}
.fa-icon {
  width: auto;
  height: 1em;
  max-width: 100%;
  max-height: 100%;
  padding-bottom: 2px;
}
.navbar-brand {
  font-weight: 700;
}
</style>
