<template>
  <h1>Design Challenge 2</h1>
  <h2>Contrast and scale</h2>
  <p>
    My solution included using the following properties:
    width, background, padding, margin,
    text-transform, font-size, letter-spacing & color
  </p>
  <div class="container">
    <h1>Contact us Today</h1>
    <p>We usually respond within 24 hours. If we don't, you get a free month on us.</p>

    <form>
      <label for="name">Your name</label>
      <input type="text" id="name">

      <label for="name">Your name</label>
      <textarea id="name"></textarea>

      <input type="submit" value="Send message">
    </form>
  </div>

  <div class="colors">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="solution">
    <h2>Solution</h2>
  </div>
</template>

<script>

export default {
  name: 'ChallengThree',
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
  margin-top: 3em;
  border-left: .7em  solid gray;
  padding: 0 3em;
}
h1 {
  margin: 0;
}
p {
  color: #9D9D9D;
  margin: .5em 0 2em;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: .7em;
}
input[type=text], textarea {
  margin-bottom: 1.5em;
  display: block;
  padding: .5em;
  width: 80%;
  background: gray;
  border: none;
  border-bottom: 1px solid lightgray;
  outline: 0;
  color: black;
}
input[type=text]:focus, textarea:focus {
  border-bottom: 1px solid white;
}

input[type=submit] {
  background: gray;
  border: none;
  color: white;
  font-weight: bold;
  padding: .8em 2em;
  border-radius: 2em;
  font-size: .8em;
}

.colors {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: .5em;
}
.colors div {
  width: 2em;
  height: 2em;
  background: gray;
  border-radius: 50%;
  margin-bottom: .4em;
  margin-right: .3em;
  float: left;
  text-align: center;
  display: grid;
  place-content: center;
  border: 2px solid rgba(0,0,0,.3);
}
.colors div:nth-child(1) {
  background-color: #1C2022;
}
.colors div:nth-child(2) {
  background-color: #9D9D9D;
}
.colors div:nth-child(3) {
  background-color: #2B3337;
}
.colors div:nth-child(4) {
  background-color: #FF01FF;
}
.colors div:nth-child(5) {
  background-color: white;
  color: black;
}
</style>
