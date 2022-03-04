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

    <ColorsForm/>

    <hr/>

    <h2 class="initial-info__subheader">
      What is <strong>VLAVAAV</strong>?
    </h2>

    <p class="initial-info__paragraph">
      Tired of approaching webpages, specifications, and themes without having a practical way to visualize all their colors at once?
    </p>

    <p class="initial-info__paragraph">
      <strong>VLAVAAV</strong> is a tool for quickly visualizing any number of unknown hexadecimal (#XXXXXX) color codes.
      It tries its best to find color codes amongst a sea of text, so you don't have to worry about cleaning up your copied text first.
    </p>

    <p class="initial-info__paragraph">
      Simply paste your text with hexadecimal color codes above to generate your palette, and <strong>VLAVAAV</strong> will generate an easy-to-read, easy-to-copy view of all your colors.
      Then bookmark your palette for later and share it among your colleagues.
    </p>

    <p class="initial-info__paragraph initial-info__paragraph--no-justify">
      <strong>VLAVAAV</strong> © Alex L. Alves 2022.
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
import ColorsForm from '@/components/ColorsForm.vue';

@Component({
  components: {
    ColorsForm,
  },
})
export default class InitialInfo extends Vue { }
</script>

<style scoped lang="scss">
.initial-info {
  margin: 32px 16px;

  @media (min-width: 480px) {
    max-width: 600px;
  }

  & > * {
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
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

.initial-info__subheader {
  font-size: 1.25em;
  line-height: 1.25em;
  margin-top: 0;
}

.initial-info__paragraph {
  line-height: 1.5em;
  margin-top: 0px;
  text-align: justify;

  &--no-justify {
    text-align: unset;
  }
}

.initial-info__link {
  color: var(--text-color);
  display:inline-block;

  &:hover {
    text-decoration: none;
  }
}
</style>
