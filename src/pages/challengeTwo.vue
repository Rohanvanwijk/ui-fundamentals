<template>
  <h1>Design Challenge 2</h1>
  <h2>Contrast and scale</h2>
  <p>
    My solution included using the following properties:
    width, background, padding, margin,
    text-transform, font-size, letter-spacing & color
  </p>
  <div class="container">
    <div class="card" v-for="index in 3" :key="index">
      <img class="image" :src="cardData.image" alt="foto">
      <div class="content">
        <p class="date">{{ cardData.date }}</p>
        <h3>{{ cardData.title }}</h3>
        <p class="desc">{{ cardData.description }}</p>
      </div>
    </div>
  </div>
  <div class="solution">
    <h2>Solution</h2>
    <div class="container">
      <div class="card" v-for="index in 5" :key="index">
        <img class="image" :src="cardData.image" alt="foto">
        <div class="content">
          <p class="date">{{ cardData.date }}</p>
          <h3>{{ cardData.title }}</h3>
          <p class="desc">{{ cardData.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChallengeTwo',
  data() {
    return {
      cardData: {
        image: 'https://trisquel.info/files/stnew7.jpg',
        date: 'December 18, 2023',
        title: 'November Rain',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
      },
    };
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
.container {
  display: grid;
  width: 100%;
  margin: 2em auto 0;
  color: #9FB2B9;
}
.card {
  background: #337590;
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  border-radius: 1em;
  margin-bottom: 2em;

  .solution & {
    color: white;
    padding: 1em;
    gap: 1em;
  }
}
p, h3 {
  margin: 0;
}
h3 {
  margin-left: 1em;
  margin-top: .5em;

  .solution & {
    margin-left: 0;
    margin-bottom: 0.5em;
    margin-top: 0;
  }
}
.image {
  width: 5em;
  height: 5em;
  background: #75A2B8;
  border-radius: 50%;
  object-fit: cover;
}
.solution {
  .date {
    font-size: 0.6em;
    opacity: 0.8;
    text-transform: uppercase;
    text-align: right;
  }
}
</style>
