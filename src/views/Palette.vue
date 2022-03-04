<template>
  <div class="palette">
    <div class="palette__header">
      <span class="palette__hide-mobile">Click</span>
      <span class="palette__show-mobile">Tap</span>
      a color to copy it to your clipboard.
    </div>

    <h1
      v-if="showTitleNotInput"
    >
      {{ title }}
    </h1>

    <div
      v-else
      class="palette__name-input-box"
    >
      <input
        class="palette__name-input"
        type="text"
        placeholder="Name your palette..."
        v-model="paletteTitle"
      />
      <button
        class="palette__name-input-button"
        @click="namePalette"
      >
        OK
      </button>
    </div>

    <div class="palette__colors-wrapper">
      <ShowColors :commaSeparatedColors="colors"/>
    </div>

    <div class="palette__footer">
      <router-link :to="{name: 'Home'}" class="palette__footer-link">Click here</router-link>
      to paste a new set of colors.
      <strong>VLAVAAV</strong> © Alex L. Alves 2021.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ShowColors from '@/components/ShowColors.vue';

@Component({
  components: {
    ShowColors,
  },
})
export default class Palette extends Vue {
  @Prop({ type: String, default: '' }) readonly colors!: string;

  @Prop({ type: String, default: '' }) readonly title!: string;

  private paletteTitle = '';

  get showTitleNotInput() {
    return this.$route.name === 'TitledPalette';
  }

  public namePalette() {
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

.palette__colors-wrapper {
  margin: 16px;
}

.palette__header {
  background-color: #222;
  height: 2em;
  line-height: 2em;
}

.palette__footer {
  margin-top: auto;
  min-height: 2em;
  line-height: 2em;
  background-color: #222;
  color: #DDD;
}

.palette__footer-link {
  color: #ffffff;

  &:hover {
    text-decoration: none;
  }
}
</style>
