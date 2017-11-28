<template>
  <form class="form-inline">
    <button
      type="button"
      :aria-label="label"
      :aria-controls="target.id ? target.id : target"
      :aria-expanded="toggleState ? 'true' : 'false'"
      @click="onclick"
      class="btn btn-outline-dark btn-toggler d-md-none my-auto"
      aria-label="Link naar menu/main navigation"
    >
      <span class="align-middle mr-2 my-auto">Menu</span>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        viewBox="0 0 25 20"
        class="align-middle"
        style="padding-bottom: 4px;"
      >
        <g fill="#fff" id="Hamburger">
          <path d="M0,2 L25,2 L25,6 L0,6 L0,2 Z M0,10 L25,10 L25,14 L0,14 L0,10 Z M0,18 L25,18 L25,22 L0,22 L0,18 Z"/>
        </g>
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      toggleState: false
    }
  },
  props: {
    label: {
      type: String,
      default: 'Toggle navigation'
    },
    position: {
      type: String,
      default: 'right'
    },
    target: {
      required: true
    }
  },
  methods: {
    onclick () {
      const target = this.target
      if (target.toggle) {
        target.toggle()
      }
      this.$root.$emit('bv::toggle::collapse', this.target)
    },
    handleStateEvt (target, state) {
      if (target === this.target || target === this.target.id) {
        this.toggleState = state
      }
    }
  },
  created () {
    this.$root.$on('bv::collapse::state', this.handleStateEvt)
  }
}
</script>
