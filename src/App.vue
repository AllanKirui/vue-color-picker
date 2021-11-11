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
import colors from "./colors.js";
import TheHeader from "./components/TheHeader.vue";
import ColorPicker from "./components/ColorPicker.vue";

export default {
  components: { TheHeader, ColorPicker },
  data() {
    return {
      val: "hex",
      colorSet: [],
      state: {
        querySet: colors,
        page: 1, // the current page
        numOfHexagons: 36, // number of hexagons to display per page
        window: 5, // this handles how many pages we are allowed to display
      },
      buttonClicked: 1,
      activePage: [1],
      totalPages: [0],
      activeStatus: false,
      stripeColor: "",
    };
  },
  methods: {
    switchToHomepage() {
      this.buttonClicked = 1;
      this.activePage[0] = 1;
      this.state.page = 1;
      this.displayColors(this.buttonClicked);
    },
    setColorValue(val) {
      switch (val) {
        case "hex":
          this.val = "hex";
          break;
        case "rgb":
          this.val = "rgb";
          break;
        case "hsl":
          this.val = "hsl";
          break;

        default:
          this.val = "hex";
          break;
      }
    },
    displayColors(btn) {
      const data = this.pagination(
        this.state.querySet,
        this.state.page,
        this.state.numOfHexagons
      );
      this.colorSet = data.querySet;
      this.displayPageButtons(data.pages, btn);
      this.totalPages[0] = data.pages;
    },
    // takes in a querySet, our current page, number of hexagons to display
    pagination(querySet, page, numOfHexagons) {
      const trimStart = (page - 1) * numOfHexagons;
      const trimEnd = trimStart + numOfHexagons;
      const trimmedData = querySet.slice(trimStart, trimEnd);
      const pages = Math.ceil(querySet.length / numOfHexagons);

      return {
        querySet: trimmedData,
        pages: pages,
      };
    },
    displayPageButtons(pages, btnValue) {
      const that = this;
      let buttonsWrapper = document.getElementById("options-page-btns");

      buttonsWrapper.innerHTML = ``; // clear the buttons wrapper, on each call of the function

      // set the value of the left and right most page buttons
      let maxLeft = this.state.page - Math.floor(this.state.window / 2);
      let maxRight = this.state.page + Math.floor(this.state.window / 2);

      if (maxLeft < 1) {
        maxLeft = 1;
        maxRight = this.state.window;
      }

      if (maxRight > pages) {
        maxLeft = pages - (this.state.window - 1);

        if (maxLeft < 1) {
          maxLeft = 1;
        }
        maxRight = pages;
      }

      // set the number of page buttons to display, with the active class on the active page button
      for (let page = maxLeft; page <= maxRight; page++) {
        if (page === btnValue || page === that.buttonClicked) {
          buttonsWrapper.innerHTML += `<button value=${page} class="page page-btn active">${page}</button>`;
        } else {
          buttonsWrapper.innerHTML += `<button value=${page} class="page page-btn">${page}</button>`;
        }
      }

      // add the 'first' page button if the active button is greater than or equal to 4
      if (this.state.page >= 4) {
        buttonsWrapper.innerHTML =
          `<button value=${1} class="page page-btn">&#171; First</button>` +
          buttonsWrapper.innerHTML;
      }

      // add the 'last' page button if the active button is less than or equal to the total number of pages minus 3
      if (this.state.page <= pages - 3) {
        buttonsWrapper.innerHTML += `<button value=${pages} class="page page-btn">Last &#187;</button>`;
      }

      const pageBtns = document.querySelectorAll(".page");

      pageBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          const pageNumber = parseInt(this.value);
          that.buttonClicked = pageNumber;
          that.activePage[0] = pageNumber;
          that.state.page = pageNumber;
          that.displayColors(that.buttonClicked);
        });
      });
    },
    addOverlay(status) {
      this.activeStatus = status;
    },
    removeOverlay(status) {
      this.activeStatus = status;
    },
    changeStripeColor(color) {
      this.stripeColor = color;
    },
  },
  provide() {
    return {
      numOfPages: this.totalPages,
      currentPage: this.activePage,
    };
  },
  // use the mounted() lifecycle hook to execute the displayColors()
  // method as soon as the page has loaded
  mounted() {
    this.displayColors();
  },
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

.container .hexagon .color {
  margin: 0;
  background-color: var(--color-mountbatten-pink);
  position: absolute;
  top: 0%;
  left: 0%;
  transform-origin: 0% 50%;
  transition: transform 0.75s;
}

.container .hexagon .color-name {
  border-bottom: 1px solid #000;
}

.container .hexagon:hover .color {
  transform: rotate(-150deg);
}

.container .hexagon .color-text {
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
