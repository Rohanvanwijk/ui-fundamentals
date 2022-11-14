<template>
  <nav>
    <ul class="list">
      <li class="list__item" v-for="(navigation, index) in navigations" :key="navigation.path">
        <router-link
            :to="navigation.path"
            :class="[
                'list__link',
                navigations[index].name === navigation.name ? 'active' : null,
                ]"
        >
          {{ navigation.name }}
        </router-link>
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
        },
        {
          name: 'Challenge 3',
          path: '/challenge-3'
        },
        {
          name: 'Challenge 4',
          path: '/challenge-4'
        },
        {
          name: 'Challenge 5',
          path: '/challenge-5',
        },
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