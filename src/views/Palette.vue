<template>
  <div class="palette">
    <!-- <div class="palette__menu-bar">
      <span class="palette__hide-mobile">Click</span>
      <span class="palette__show-mobile">Tap</span>
      a color to copy it to your clipboard.
    </div> -->

    <h1
      v-if="showTitleNotInput"
      class="palette__header"
    >
      {{ title }}
    </h1>

    <div
      v-else
      class="palette__name-input-wrapper"
    >
      <input
        class="palette__name-input-area"
        type="text"
        placeholder="Name your palette..."
        v-model="paletteTitle"
      />
      <v-button
        class="palette__name-input-button"
        @click="namePalette"
      >
        OK
      </v-button>
    </div>

    <p class="palette__introduction">
      <span class="palette__hide-mobile">Click</span>
      <span class="palette__show-mobile">Tap</span>
      a color to copy it to your clipboard.<br/>

      <a
        @click="copyLinkToClipboard"
        class="palette__link"
      >Share this palette</a>

      •

      <router-link
        :to="{name: 'Home'}"
        class="palette__link"
      >
        Paste a new set of colors
      </router-link>
    </p>

    <div class="palette__colors-wrapper">
      <ShowColors :commaSeparatedColors="colors"/>
    </div>

    <div class="palette__footer">
      <strong>VLAVAAV</strong> © Alex L. Alves 2022.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ShowColors from '@/components/ShowColors.vue';
import VButton from '@/components/VButton.vue';

@Component({
  components: {
    ShowColors,
    VButton,
  },
})
export default class Palette extends Vue {
  @Prop({ type: String, default: '' }) readonly colors!: string;

  @Prop({ type: String, default: '' }) readonly title!: string;

  private paletteTitle = '';

  get showTitleNotInput() {
    return this.$route.name === 'TitledPalette';
  }

  public copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  public copyLinkToClipboard() {
    this.copyToClipboard(document.URL);
  }

  public namePalette() {
    if (!this.paletteTitle) return;

    this.$router.push({
      name: 'TitledPalette',
      params: {
        colors: this.colors,
        title: this.paletteTitle,
      },
    });
  }
}
</script>

<style scoped lang="scss">
.palette {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-height: 100vh;
  width: 100%;
}

.palette__show-mobile {
  @media (min-width: 480px) {
    display: none;
  }
}

.palette__hide-mobile {
  display: none;

  @media (min-width: 480px) {
    display: unset;
  }
}

.palette__menu-bar {
  background-color: var(--light-background-color);
  height: 2em;
  line-height: 2em;
  border-radius: 0 0 1em 1em;
}

.palette__header {
  margin-top: 32px;
  margin-bottom: 16px;
}

.palette__introduction {
  line-height: 1.25em;
  margin: 0px 16px 16px;
}

.palette__link {
  color: var(--text-color);
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}

.palette__name-input-wrapper {
  align-self: center;
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  padding: 16px;
  width: 100%;
  max-width: 600px;

  @media (min-width: 480px) {
    gap: 24px;
  }
}

.palette__name-input-area {
  background-color: var(--textarea-color);
  box-sizing: border-box;
  border: 0;
  border-radius: 8px;
  color: var(--text-color);
  display: block;
  font-size: 1.25em;
  line-height: 1.25em;
  padding: 0.25em;
  width: 100%;

  @media (min-width: 480px) {
    font-size: 1.5em;
  }
}

.palette__colors-wrapper {
  margin: 32px 16px;
}

.palette__footer {
  margin-top: auto;
  min-height: 2em;
  line-height: 2em;
  background-color: var(--light-background-color);
  border-radius: 1em 1em 0 0 ;
}
</style>
