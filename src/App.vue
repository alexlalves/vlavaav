<template>
  <div id="app" data-theme="dark">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/global.css';

#app {
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  min-height: 100vh;
  text-align: center;
}
</style>
