<template>
  <div>
    <div
      class="show-colors"
      :style="`grid-template-columns: repeat(${numberOfColumns}, 1fr)`"
    >
      <div
        v-for="color in colors"
        :key="color"
        :style="`background-color: #${color}; flex-grow: 1`"
        @click="copyToClipboard(color)"
        class="show-colors__cell"
      >
        <div class="show-colors__cell-description-box">
          <code class="show-colors__cell-description">
            {{ color }}
            <br>
          </code>
        </div>
      </div>
    </div>
    <div class="show-colors__footer">
      <a href="." class="show-colors__footer-link">Click here</a>
      to paste a new set of colors.
      <strong>VLAVAAV</strong> © Alex L. Alves 2020.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ShowColors extends Vue {
  @Prop(
    { required: false, type: String, default: () => '' },
  ) readonly commaSeparatedColors!: string

  get colors() {
    return this.commaSeparatedColors.split(',');
  }

  get numberOfColumns() {
    const numberOfColors = this.colors.length;

    const squareRoot = Math.floor(Math.sqrt(numberOfColors));
    const isSquare = squareRoot * squareRoot === numberOfColors;

    return isSquare ? squareRoot : squareRoot + 1;
  }

  public copyToClipboard(color: string) {
    navigator.clipboard.writeText(color);
  }
}
</script>

<style scoped lang="scss">
.show-colors {
  display: grid;
  height: calc(100vh - 2em);
  width: 100vw;
}

.show-colors__cell {
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover .show-colors__cell-description:after {
    content: '(click to copy)';
  }
}

.show-colors__cell-description-box {
  background-color: rgba(12, 12, 12, 0.8);
  font-size: larger;
  padding: .5em;
  width: 100%;
}

.show-colors__cell-description {
  font-size: larger;
}

.show-colors__footer {
  height: 2em;
  line-height: 2em;
}

.show-colors__footer-link {
  color: #ffffff;

  &:hover {
    text-decoration: none;
  }
}
</style>
