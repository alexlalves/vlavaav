<template>
  <div class="palette">
    <ShowColors :commaSeparatedColors="colors"/>
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
export default class App extends Vue {
  @Prop({ type: String, default: '' }) readonly colors!: string
}
</script>
