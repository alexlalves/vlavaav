<template>
  <div class="initial-info">
    <img
      class="initial-info__logo"
      alt="VLAVAAV logo"
      src="@/assets/logo.svg"
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
      <strong>VLAVAAV</strong> © Alex L. Alves 2021.
      <br/>
      Check the project out on GitHub:
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
    'V: #ff0000,',
    'L: #ff8800,',
    'A: #ffff00,',
    'V: #00ff00,',
    'A: #0000ff,',
    'A: #8800ff,',
    'V: #ff00ff,',
  ].join('\n');
}
</script>

<style scoped lang="scss">
.initial-info {
  margin: 32px 16px;

  @media (min-width: 480px) {
    max-width: 600px;
  }

  & > * {
    margin-bottom: 16px;

    @media (min-width: 480px) {
      margin-bottom: 32px;
    }
  }
}

.initial-info__logo {
  width: 100%;
}

.initial-info__header {
  font-size: 1.5em;
  line-height: 1.25em;
  margin-top: 0;

  @media (min-width: 480px) {
    font-size: 2em;
  }
}

.initial-info__paragraph {
  line-height: 1.5em;
  margin-top: 0px;
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

  &:hover {
    text-decoration: none;
  }
}
</style>
