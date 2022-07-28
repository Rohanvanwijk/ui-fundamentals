<template>
  <div class="container-app">
    <div class="app">
      <div class="app__navigation">
        <NavigationHeader />
      </div>
      <div class="app__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationHeader from './components/NavigationHeader.vue';

export default {
  name: 'App',
  components: {
    NavigationHeader,
  }
}
</script>

<style lang="scss">
@import "./styles/variables";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.4rem;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
  &__navigation {
    flex-basis: 20%;
  }
}
.container-app {
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 1.2em;
}
a {
  color: $color-link;
}
h3, h1, h2 {
  margin-top: 0;
}
</style>
