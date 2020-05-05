<template>
  <div id="app" @paste="onAppPaste">
    <img alt="Vue logo" src="./assets/drawing.svg">
    <HelloWorld/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  onAppPaste = (pastedContent: ClipboardEvent) => {
    if (pastedContent.clipboardData) {
      console.log(pastedContent.clipboardData.getData('text'));
    }
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
