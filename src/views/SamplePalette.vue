<template>
  <Palette
    :colors="paletteColors"
    :title="paletteTitle"
  />
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';
import SamplePalettes from '@/assets/sample_palettes';
import Palette from '@/views/Palette.vue';

@Component({
  components: {
    Palette,
  },
})
export default class SamplePalette extends Vue {
  @Prop({ type: String, default: '' }) readonly palette!: string;

  private paletteTitle = '';

  private paletteColors = '';

  @Watch('palette')
  paletteUpdated(newPalette: string) {
    this.loadPalette(newPalette);
  }

  public created() {
    this.loadPalette(this.palette);
  }

  public isValidPalette(palette: string) {
    return Object.values(SamplePalettes).includes(palette);
  }

  public loadPalette(palette: string) {
    if (this.isValidPalette(palette)) {
      import(`../assets/sample_palettes/${palette}.json`).then(
        ({ default: myData }) => {
          this.paletteColors = myData.colors.join(',');
          this.paletteTitle = myData.name;
        },
      );
    } else {
      this.$router.push({
        name: 'Home',
      });
    }
  }
}
</script>
