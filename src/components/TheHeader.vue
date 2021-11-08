<template>
  <nav>
    <div class="logo">
      <a href="#" title="Go Home" @click="$emit('go-home')"
        ><img src="../assets/logo.svg" alt="color picker site logo"
      /></a>
    </div>

    <button
      class="burger"
      @click="openMenu"
      :class="isActive ? 'open' : ''"
      :title="isActive ? 'Hide Menu' : 'Show Menu'"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="stripe" :style="{ backgroundColor: stripeColor }"></div>
  </nav>

  <!-- Render the overlay in the body tag -->
  <teleport to="body">
    <div
      class="overlay"
      :class="isActive ? 'active' : ''"
      @click="removeOverlay"
    ></div>
  </teleport>
</template>

<script>
export default {
  props: ["closeMenu", "stripeColor"],
  emits: ["go-home", "set-value", "show-overlay", "hide-overlay"],
  data() {
    return {
      isActive: this.closeMenu,
    };
  },
  methods: {
    setColorValue(val) {
      this.$emit("set-value", val);
    },
    openMenu() {
      this.isActive = !this.isActive;
      this.$emit("show-overlay", this.isActive);
      this.toggleNoScroll();
    },
    removeOverlay() {
      this.isActive = !this.isActive;
      this.$emit("hide-overlay", this.isActive);
      this.toggleNoScroll();
    },
    toggleNoScroll() {
      document.querySelector("body").classList.toggle("no-scroll");
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 50px;
  background-color: var(--color-cultured);
  margin-bottom: 30px;
  box-shadow: 0 5px 10px #ccc;
  position: relative;
  z-index: 3;
}

.logo {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
}

.logo img {
  max-width: 100%;
}

.burger {
  position: absolute;
  top: 50%;
  right: 95px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 2;
}

.burger span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-midnight-blue);
  transform-origin: 2.3px 1.1px;
  transition: all 0.3s ease-in-out;
}

.burger > span:not(:last-child) {
  margin-bottom: 5px;
}

.burger span:nth-child(1) {
  width: 75%;
}

.burger span:nth-child(2) {
  width: 50%;
}

.burger.open span:nth-child(1) {
  width: 100%;
  transform: rotate(45deg);
}

.burger.open span:nth-child(2) {
  opacity: 0;
}

.burger.open span:nth-child(3) {
  transform: rotate(-45deg);
}

.stripe {
  width: 120px;
  height: 100%;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
  background-color: #dcb8ba;
  position: absolute;
  bottom: 0;
  right: 0;
}

/* Media queries */
@media (max-width: 640px) {
  .burger {
    right: 65px;
  }

  .stripe {
    right: -30px;
  }
}
</style>