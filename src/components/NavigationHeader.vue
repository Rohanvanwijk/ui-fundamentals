<template>
  <nav>
    <ul class="list">
      <li class="list__item" v-for="navigation in navigations" :key="navigation.path">
        <router-link :to="navigation.path" class="list__link">{{ navigation.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'componentNavigation',
  data() {
    return {
      navigations: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Challenge 1',
          path: '/challenge-1'
        },
        {
          name: 'Challenge 2',
          path: '/challenge-2'
        }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 0;
  list-style: none;
  &__link {
    font-size: 1.2rem;
    padding: 0.5rem 0;
    display: block;
    text-decoration: none;
  }
}
</style>