<template>
  <Palette
    :colors="paletteColors"
    :title="paletteTitle"
  />
</template>

<script lang="ts">
import SamplePalettes from '../assets/sample_palettes';
import Palette from '../views/Palette.vue';

export default {
  components: {
    Palette,
  },
  props: {
    palette: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      paletteTitle: '',
      paletteColors: '',
    };
  },
  watch: {
    palette(newPalette: string) {
      this.loadPalette(newPalette);
    },
  },
  created() {
    this.loadPalette(this.palette);
  },
  methods: {
    isValidPalette(palette: string) {
      return Object.values(SamplePalettes).includes(palette);
    },
    loadPalette(palette: string) {
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
    },
  },
};

</script>
