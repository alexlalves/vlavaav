<template>
  <form @submit.prevent>
    <p v-if="errorMessageToShow">
      {{ errorMessageToShow }}
    </p>

    <textarea
      class="colors-form__input-area"
      :placeholder=exampleText
      v-model="pastedInfo"
    />

    <div class="colors-form__button-container">
      <v-button
        class="colors-form__submit-button"
        type="submit"
        value="generate"
        @click="submitGenerate"
      >
        Generate
      </v-button>

      <v-button
        class="colors-form__submit-button colors-form__submit-button--random"
        type="submit"
        value="random"
        @click="submitRandom"
      >
        Surprise me!
      </v-button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SAMPLE_PALETTES from '@/assets/sample_palettes';
import VButton from '@/components/VButton.vue';

@Component({
  components: {
    VButton,
  },
})
export default class ColorsForm extends Vue {
  private exampleText = [
    'Paste here your colors and click \'Generate\'.',
    'Example input:',
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

  public submitGenerate() {
    const {
      pastedInfo,
      $router,
      findColors
    } = this;

    if (!pastedInfo) {
      $router.push({
        name: `Palette-${SAMPLE_PALETTES.VLAVAAV}`,
      });
    }

    const colors = findColors(pastedInfo);

    if(colors.length) {
      $router.push({
        name: 'Palette',
        query: { colors },
      });
    } else {
      this.errorMessageToShow = 'No colors of the #RRGGBB format were found in the submitted text.';
    }
  }

  public submitRandom() {
    const allPalettes = Object.values(SAMPLE_PALETTES);

    const randomPalette = allPalettes[
      Math.floor(
        allPalettes.length * Math.random()
      )
    ];

    this.$router.push({
      name: `Palette-${randomPalette}`,
    });
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
  background-color: var(--textarea-color);
  border: 0;
  border-radius: 8px;
  box-sizing: border-box;
  color: var(--text-color);
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

.colors-form__button-container {
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 16px;

  @media (min-width: 480px) {
    grid-gap: 24px;
    grid-template-columns: 3fr 2fr;
  }
}

.colors-form__submit-button {
  cursor: pointer;
  font-size: 1.1em;
  margin-bottom: 0;
  padding: 1em;

  &--random {
    font-size: unset;
  }
}
</style>
