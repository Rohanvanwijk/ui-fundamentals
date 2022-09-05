<template>
  <h1>Design Challenge 1</h1>
  <h2>Alignment and whitespace</h2>
  <p>
    Use the following properties
    to fix the alignment and white
    space issues on the rulesets
    below this comment.
  </p>
  <ul>
    <li>margin</li>
    <li>padding</li>
    <li>text-align</li>
  </ul>
  <div class="container">
    <div class="card" v-for="index in 3" :key="index">
      <img :src="cardData.image">
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
      <div class="card" v-for="index in 3" :key="index">
        <img :src="cardData.image">
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
  name: 'ChallengeOne',
  data() {
    return {
      cardData: {
        image: 'https://www.carquotes.com/StockPhoto.ashx?NewCarBodyStyleId=74083',
        date: 'July 12, 2024',
        title: 'Awesome Title',
        description: 'This is the lovely description for this particular card.',
      },
    };
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.container {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 2em;
}
.card {
  background: white;
}
img {
  height: 100px;
  display: block;
  width: 100%;
  background: #71A6B8;
  object-fit: cover;
}

p.date {
  text-align: center;
  font-size: .7em;
  text-transform: uppercase;
  .solution & {
    text-align: left;
  }
}
h3 {
  margin: 0;
  .solution & {
    margin-bottom: 0.4em;
  }
}
p.desc {
  font-size: .9em;
  .solution & {
    margin-bottom: 0;
  }
}
.content {
  background-color: $color-primary;
  .solution & {
    padding: 1em;
  }
}
.solution {
  margin-top: 2em;
  p {
    margin-top: 0;
  }
}
</style>
