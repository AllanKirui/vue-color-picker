<template>
  <div class="options" :class="showMenu ? 'open' : ''">
    <div class="options-color">
      <p>SET COLOR VALUE</p>
      <div class="options-color-btns">
        <div
          data-cooltipz-dir="bottom"
          data-cooltipz-size="medium"
          aria-label="Set the color value to HEX e.g #ffffff"
        >
          <button
            class="btn"
            :class="activeBtn === 'hex' ? 'active' : ''"
            @click="$emit('choose-value', 'hex'), setActiveBtn('hex')"
          >
            HEX
          </button>
        </div>

        <div
          data-cooltipz-dir="bottom"
          data-cooltipz-size="medium"
          aria-label="Set the color value to RGB e.g rgb(255, 255, 255)"
        >
          <button
            class="btn"
            :class="activeBtn === 'rgb' ? 'active' : ''"
            @click="$emit('choose-value', 'rgb'), setActiveBtn('rgb')"
          >
            RGB
          </button>
        </div>

        <div
          data-cooltipz-dir="bottom"
          data-cooltipz-size="medium"
          aria-label="Set the color value to HSL e.g hsl(0, 0%, 100%)"
        >
          <button
            class="btn"
            :class="activeBtn === 'hsl' ? 'active' : ''"
            @click="$emit('choose-value', 'hsl'), setActiveBtn('hsl')"
          >
            HSL
          </button>
        </div>
      </div>
    </div>

    <div class="options-pages">
      <p>
        CHOOSE PAGE<br />(showing {{ currentPage[0] }} of {{ numOfPages[0] }})
      </p>
      <div id="options-page-btns"></div>
    </div>

    <div class="options-link">
      <div class="link">
        <a
          href="https://github.com/AllanKirui/vue-color-picker"
          title="View code on GitHub"
          ><img src="../assets/github-logo.svg" alt="GitHub logo" /> GITHUB</a
        >
      </div>
      <div class="link-text">Powered by Vue</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show-menu"],
  inject: ["numOfPages", "currentPage"],
  data() {
    return {
      activeBtn: "hex",
    };
  },
  methods: {
    setActiveBtn(val) {
      this.activeBtn = val;
    },
  },
};
</script>

<style scoped>
.options {
  position: absolute;
  top: 130%;
  right: 6rem;
  width: 280px;
  padding: 50px 30px;
  border-radius: 5px;
  background-color: var(--color-cultured);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  font-family: "Fjalla One", sans-serif;
  font-size: 18px;
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.options.open {
  visibility: visible;
  opacity: 1;
}

.options-pages p,
.options-color p {
  text-align: center;
  margin-bottom: 14px;
  color: var(--color-jazzberry-jam);
}

.options-color {
  margin-bottom: 30px;
}

.options-color-btns {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.options-color-btns .btn {
  color: var(--color-midnight-blue);
  padding: 4px 18px;
  background-color: var(--color-traffic-white);
  outline: none;
  border: none;
  border-radius: 50px;
  font-family: inherit;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
}

.options-color-btns .btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent,
    transparent,
    var(--color-amber),
    transparent,
    transparent
  );
  transform: skewX(-30deg);
  transition: left 0.75s;
  z-index: -1;
}

.options-color-btns .btn:hover::before {
  left: 100%;
  z-index: 1;
}

.options-color-btns .btn aria-label {
  position: absolute;
  z-index: 3;
}

.options-color-btns .btn.active {
  background-color: var(--color-mustard);
}

.options-pages {
  margin-bottom: 30px;
}

.options-link {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: var(--color-jazzberry-jam);
}

.options-link .link {
  margin-bottom: 6px;
  transition: transform 0.4s ease-in-out;
}

.options-link .link:hover {
  transform: scale(1.1);
}

.options-link .link a {
  text-decoration: none;
  color: inherit;
}

.options-link .link a img {
  position: relative;
  top: 2px;
}

.options-link .link-text {
  font-size: 14px;
}

/* Media queries */
@media (max-width: 640px) {
  .options {
    right: 50%;
    transform: translateX(50%);
  }
}
</style>