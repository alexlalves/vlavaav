<template>
  <div class="hello">
    <div
      v-for="color in colors"
      :key="color"
      :style="`background-color: ${color}; flex-grow: 1`"
      class="color"
    >
      <p>
        {{ color }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ShowColors extends Vue {
  @Prop({ required: false, type: Array, default: () => [] }) readonly colors!: string[]
}
</script>

<style scoped lang="scss">
.hello {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
