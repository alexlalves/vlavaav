<template>
  <div>
    <div class="show-colors">
      <div
        v-for="color in colors"
        :key="color"
        :style="`background-color: #${color};`"
        @click="copyToClipboard(color)"
        class="show-colors__cell"
      >
        <div class="show-colors__cell-description-box">
          <code>{{ color }}</code>
        </div>
      </div>

      <div
        @click="copyLinkToClipboard()"
        class="show-colors__cell"
      >
        <div class="show-colors__cell-description-box">
          <code>Share this palette</code>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ShowColors extends Vue {
  @Prop(
    { required: false, type: String, default: () => '' },
  ) readonly commaSeparatedColors!: string;

  get colors() {
    return this.commaSeparatedColors.split(',');
  }

  public copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  public copyLinkToClipboard() {
    this.copyToClipboard(document.URL);
  }
}
</script>

<style scoped lang="scss">
.show-colors {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

.show-colors__cell {
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  height: 160px;

  &:hover {
    transform: scale(1.05);
  }
}

.show-colors__cell-description-box {
  background-color: rgba(12, 12, 12, 0.8);
  font-size: 1.25em;
  padding: .5em;
  width: 100%;
}
</style>
