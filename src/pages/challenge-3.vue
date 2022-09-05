<template>
  <h1>Design Challenge 3</h1>
  <h2>Contrast and scale</h2>
  <p>
    Only use the following colors:
    <ul>
      <li v-for="(color, index) in colors" :key="index">
        {{ color }}
        <span :style="`background-color: ${color};`">{{ index + 1 }}</span>
      </li>
    </ul>
  </p>
  <div class="sandbox">
    <div class="container">
      <h1>Contact us Today</h1>
      <p>We usually respond within 24 hours. If we don't, you get a free month on us.</p>

      <form>
        <label for="name-1">Your name</label>
        <input type="text" id="name-1">

        <label for="message-1">Your message</label>
        <textarea id="message-1"></textarea>

        <button type="submit">Send message</button>
      </form>
    </div>
  </div>
<div class="solution">
  <h2>Solution</h2>
</div>
<div class="sandbox one__sandbox">
    <div class="container one__container">
      <h1 class="one__title">Contact us Today</h1>
      <p class="one__description">We usually respond within 24 hours. If we don't, you get a free month on us.</p>

      <form class="one__form">
        <label for="name-2" class="one__label">Your name</label>
        <input type="text" id="name-2" class="one__input" v-model="name" required>

        <label for="message-2" class="one__label">Your message</label>
        <textarea id="message-2" class="one__input" v-model="message" required />

        <button type="submit" class="one__button" :disabled="isValid">Send message</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChallengThree',
  data() {
    return {
      colors: [
        '#1C2022',
        '#9D9D9D',
        '#2B3337',
        '#FF01FF',
        '#FFFFFF'
      ],
      name: '',
      message: '',
    };
  },
  computed: {
    isValid() {
      return !this.name && !this.message;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
$color-1: #1C2022;
$color-2: #9D9D9D;
$color-3: #2B3337;
$color-4: #FF01FF;
$color-5: white;
$border-radius: 4px;

.sandbox {
  background: rgba(0,0,0,.8);
  color: white;
  margin-bottom: 3em;
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

button {
  background: gray;
  border: none;
  color: white;
  font-weight: bold;
  padding: .8em 2em;
  border-radius: 2em;
  font-size: .8em;
}
}
.one {
  &__container {
    padding: 1em !important;
    border-left-color: $color-3 !important;
  }
  &__title {
    text-transform: uppercase;
  }
  &__sandbox {
    background-color: $color-1;
  }
  &__input {
    font-size: inherit;
    background-color: $color-2 !important;
    transition: all 200ms ease-in-out;
    border-radius: $border-radius;
    &:focus {
      background-color: $color-5 !important;
    }
  }
  &__button {
    background-color: $color-4 !important;
    border: 1px solid $color-4 !important;
    transition: background-color 200ms ease-in-out;
    font-size: inherit !important;
    padding: 0.6em 2em !important;
    &:focus,
    &:hover {
      background-color: transparent !important;
      cursor: pointer;
    }
    &:disabled {
      background-color: $color-3 !important;
      border-color: $color-1 !important;
      color: $color-1;
      cursor: not-allowed;
    }
  }
}
</style>
