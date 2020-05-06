<template>
  <div id="app" @paste="onAppPaste">
    <template v-if="showInitialInfo">
      <InitialInfo v-if="showInitialInfo"/>
    </template>
    <ShowColors
      v-else
      :colors="colors"
    />
    <p v-if="errorMessageToShow">
      {{ errorMessageToShow }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InitialInfo from './components/InitialInfo.vue';
import ShowColors from './components/ShowColors.vue';

@Component({
  components: {
    InitialInfo,
    ShowColors,
  },
})
export default class App extends Vue {
  private colors: string[] = [];

  private errorMessageToShow = '';

  public onAppPaste(pastedContent: ClipboardEvent) {
    let str = '';

    if (pastedContent.clipboardData) {
      str = pastedContent.clipboardData.getData('text');
      this.errorMessageToShow = '';
    } else {
      this.errorMessageToShow = 'Clipboard is empty, nothing was pasted!';
    }

    this.colors = [...new Set(this.findColors(str))];
    if (!this.colors.length) this.errorMessageToShow = 'No colors of the #RRGGBB format were found in the pasted text.';
  }

  public findColors(pastedText: string): string[] {
    return Array.from(pastedText.matchAll(/#[0-9a-fA-F]{6}/g), (m) => m[0]);
  }

  get showInitialInfo() {
    return !this.colors.length;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #FFFFFF;

  align-items: center;
  background-color: #424242;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

img {
  height: 120px;
}
</style>
