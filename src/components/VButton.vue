<template>
  <button
    :class="`v-button ${variantClass}`"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';

export default class Palette extends Vue {
  @Prop({ type: String, default: '' }) readonly variant!: string;

  get variantClass() {
    const { variant } = this;

    return variant && `v-button--${variant}`;
  }
}
</script>

<style scoped lang="scss">
.v-button {
  border: 0;
  padding: 0.5em 0.75em;

  background-color: var(--button-color);
  border-radius: 16px;
  box-sizing: border-box;
  color: var(--text-color);
  font-size: 1em;
  transition: 0.2s ease-in-out;

  &:hover, &:focus{
    background-color: var(--button-highlighted-color);
  }

  &:active {
    background-color: var(--button-pressed-color);
  }
}
</style>
