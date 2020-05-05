<template>
  <div id="app" @paste="onAppPaste">
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
  justify-content: center;
  height: 100vh;
}
</style>
