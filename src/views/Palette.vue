<template>
  <div class="palette">
    Hi! {{ colors }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  @Prop({ type: String, default: '' }) readonly colors!: string
}
</script>
