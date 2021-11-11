<template>
  <div class="hexagon">
    <div class="color-text">
      <p class="color-name">{{ colorName }}</p>
      <p
        class="color-value"
        data-cooltipz-dir="top"
        :aria-label="isClicked ? 'copied! 😉' : 'click to copy'"
        @click="copyClickedValue"
      >
        {{ colorValue }}
      </p>
    </div>
    <div class="color" :style="{ backgroundColor: colorValue }"></div>
  </div>
</template>

<script>
export default {
  props: ["colorName", "colorValue"],
  emits: ["color-copied"],
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    copyClickedValue() {
      navigator.clipboard.writeText(this.colorValue);
      this.isClicked = !this.isClicked;

      setTimeout(() => {
        this.isClicked = !this.isClicked;
      }, 1000);

      this.$emit("color-copied", this.colorValue);
    },
  },
};
</script>

<style>
.hexagon .color {
  margin: 0;
  background-color: var(--color-mountbatten-pink);
  position: absolute;
  top: 0%;
  left: 0%;
  transform-origin: 0% 50%;
  transition: transform 0.75s;
}

.hexagon .color-name {
  border-bottom: 1px solid #000;
}

.hexagon:hover .color {
  transform: rotate(-150deg);
}

.hexagon .color-text {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
  padding: 10px;
}
</style>