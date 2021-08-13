<template>
  <InitialInfo/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InitialInfo from '@/components/InitialInfo.vue';

@Component({
  components: {
    InitialInfo,
  },
})
export default class App extends Vue { }
</script>
