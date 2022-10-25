<template>
  <div class="hello">
    <h1>UI fundamentals</h1>
    <div class="intro">
      <a :href="imageUrl" target="_blank" rel="noreferrer">
        <img class="intro__profile" :src="imageUrl" alt="Photo of Rohan">
      </a>
      <p class="intro__content">
        A UI challenge performed by <a href="https://www.linkedin.com/in/rohanvanwijk/" target="_blank" rel="noreferrer">Rohan</a>. The goal of this challenge is to improve UI design skills for
        <a href="https://synetic.nl" rel="noreferrer" target="_blank">Synetic</a>. The course can be found on <a href="https://scrimba.com/learn/design" target="_blank" rel="noreferrer">Scrimba</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      imageUrl: 'https://media-exp1.licdn.com/dms/image/D4D03AQECp4Yomn03Ig/profile-displayphoto-shrink_800_800/0/1664275998525?e=1672272000&v=beta&t=hm85fXVcBu0-0PW6__37MOPsFZ-5gEb3ZciXMiv1jhQ',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
.intro {
  display: flex;
  gap: 1em;

  &__profile {
    border-radius: 50%;
    width: 7rem;
    height: 100%;
  }
}
</style>
