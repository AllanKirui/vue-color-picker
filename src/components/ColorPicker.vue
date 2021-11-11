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