<template>
  <form @submit.prevent="formSubmit">
    <p v-if="errorMessageToShow">
      {{ errorMessageToShow }}
    </p>

    <textarea
      class="colors-form__input-area"
      :placeholder=samplePalette
      v-model="pastedInfo"
    />

    <button
      class="colors-form__submit-button"
      type="submit"
    >
      Generate
    </button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ColorsForm extends Vue {
  private samplePalette = [
    'Paste here or just click \'Generate\'',
    'and see these colors in action:',
    '',
    'V: #ff0000,',
    'L: #ff8800,',
    'A: #ffff00,',
    'V: #00ff00,',
    'A: #0000ff,',
    'A: #8800ff,',
    'V: #ff00ff.',
  ].join('\n');

  private errorMessageToShow = '';

  private pastedInfo = '';

  public formSubmit() {
    const colors = this.findColors(this.pastedInfo || this.samplePalette);

    if (colors.length) {
      this.$router.push({ name: 'Palette', params: { colors } });
    } else {
      this.errorMessageToShow = 'No colors of the #RRGGBB format were found in the submitted text.';
    }
  }

  public findColors(pastedText: string): string {
    const colors = pastedText.match(/(?:#)[0-9a-fA-F]{6}/g) || [];

    return [...new Set(
      colors.map(color => color.toLowerCase().replace('#', '')),
    )].join(',');
  }
}
</script>

<style scoped lang="scss">
.colors-form__input-area {
  background-color: #111111;
  box-sizing: border-box;
  color: #ffffff;
  display: block;
  font-size: 1.25em;
  line-height: 1.25em;
  margin: 0;
  margin-bottom: 32px;
  min-height: 280px;
  padding: 1em 1em;
  resize: vertical;
  width: 100%;

  @media (min-width: 480px) {
    min-height: 320px;
  }
}

.colors-form__submit-button {
  background-color: #606060;
  border: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.1em;
  margin-bottom: 0;
  padding: 1em;
  transition: 0.2s ease-in-out;
  width: 100%;

  &:hover {
    background-color: #7a7a7a;
  }
}
</style>
