<template>
  <TheHeader
    @go-home="switchToHomepage"
    @set-value="setColorValue"
    @show-overlay="addOverlay"
    @hide-overlay="removeOverlay"
    :close-menu="activeStatus"
    :stripe-color="stripeColor"
  />

  <div class="main">
    <div class="container">
      <color-picker
        v-for="color in colorSet"
        :key="color.id"
        :colorName="color.name"
        :colorValue="
          val === 'hex'
            ? color.hexValue
            : val === 'rgb'
            ? color.rgbValue
            : val === 'hsl'
            ? color.hslValue
            : color.hexValue
        "
        @color-copied="changeStripeColor"
      ></color-picker>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ColorPicker from "./components/ColorPicker.vue";

export default {
  components: { TheHeader, ColorPicker },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fjalla+One&family=Noto+Sans&display=swap");
@import url("https://cdn.jsdelivr.net/npm/cooltipz-css@1.7.1/cooltipz.min.css");

:root {
  --s: 120px; /* size  */
  --m: 4px; /* margin */
  --f: calc(1.732 * var(--s) + 4 * var(--m) - 1px);

  /* Colors */
  --color-cultured: #f7f2f7;
  --color-jazzberry-jam: #9b1753;
  --color-midnight-blue: #2d4358;
  --color-mustard: #ffd65c;
  --color-amber: #ffbe00;
  --color-traffic-white: #f9f9f9;
  --color-mountbatten-pink: #937b92;
  --cooltipz-text-color: var(--color-mustard);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--color-cultured);
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.no-pointing {
  pointer-events: none;
}

.no-scroll {
  overflow: hidden !important;
}

.overlay.active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(247, 242, 247, 0.5);
  backdrop-filter: blur(6px);
  z-index: 1;
}

.main {
  display: flex;
}

.container {
  font-size: 0; /*disable white space between inline block element */
  max-width: 1240px;
  margin: 0 auto;
}

.container::before {
  content: "";
  width: calc(var(--s) / 2 + var(--m));
  float: left;
  height: 120%;
  shape-outside: repeating-linear-gradient(
    #0000 0 calc(var(--f) - 3px),
    #000 0 var(--f)
  );
}

.container div {
  width: var(--s);
  margin: var(--m);
  height: calc(var(--s) * 1.1547);
  display: inline-block;
  font-size: initial;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  background: #fff;
  margin-bottom: calc(var(--m) - var(--s) * 0.2885);
  position: relative;
  overflow: hidden;
}

#options-page-btns {
  margin-bottom: 30px;
  text-align: left;
  transition: all 0.3s ease-in-out;
}

.page-btn {
  min-width: 60px;
  padding: 4px 18px;
  background-color: var(--color-traffic-white);
  color: var(--color-midnight-blue);
  border: none;
  outline: none;
  border-radius: 50px;
  font-family: "Fjalla One", sans-serif;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.page-btn::before {
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

.page-btn:hover::before {
  left: 100%;
  z-index: 1;
}

.page-btn:not(:last-child) {
  margin-right: 5px;
  margin-bottom: 10px;
}

.page-btn.active {
  background-color: var(--color-mustard);
}
</style>
