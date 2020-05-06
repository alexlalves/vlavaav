<template>
  <div class="initial-info">
    <img
      class="initial-info__logo"
      alt="VLAVAAV logo"
      src="./../assets/drawing.svg"
    >

    <h1 class="initial-info__header">
      <strong>VLAVAAV</strong> is a no-nonsense palette visualization tool.
    </h1>

    <p class="initial-info__paragraph">
      Tired of approaching webpages, specifications, and themes without having a practical way to visualize all their colors at once?
    </p>

    <p class="initial-info__paragraph">
      <strong>VLAVAAV</strong> is a tool for quickly visualizing any number of unknown hexadecimal (#XXXXXX) color codes.
      It tries its best to find color codes amongst a sea of text, so you don't have to worry about cleaning up your copied text first.
    </p>

    <p class="initial-info__paragraph">
      <em>Paste anywhere</em> (<kbd>Ctrl + V</kbd>) in the browser for a view of all the colors in the clipboard!
    </p>

    <p class="initial-info__paragraph initial-info__paragraph--no-justify">
      Copy and try these colors out:
      <pre class="initial-info__code">{{ sample_palette }}</pre>
    </p>

    <p class="initial-info__paragraph initial-info__paragraph--no-justify">
      © Alex L. Alves 2020.
      <br/>
      Check out VLAVAAV on GitHub:
      <a
        class="initial-info__link"
        href="https://github.com/Magmagan/vlavaav"
      >
        https://github.com/Magmagan/vlavaav
      </a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class InitialInfo extends Vue {
  private sample_palette = [
    'V: #FF0000,',
    'L: #FF8800,',
    'A: #FFFF00,',
    'V: #00FF00,',
    'A: #0000FF,',
    'A: #8800FF,',
    'V: #FF00FF,',
  ].join('\n');
}
</script>

<style scoped lang="scss">
.initial-info {
  margin-top: 2em;
  width: 600px;
}

.initial-info__logo {
  width: 600px;
}

.initial-info__header {
  line-height: 1.25em;
}

.initial-info__paragraph {
  line-height: 1.5em;
  margin: 2em 0;
  text-align: justify;

  &--no-justify {
    text-align: unset;
  }
}

.initial-info__code {
  background-color: #111111;
  padding: 1em 0;
}

.initial-info__link {
  color: #FFFFFF;
}
</style>
