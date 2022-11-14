<template>
  <h1>Design challenge 5</h1>
  <h2>Final challenge</h2>
  <p>Fix the design below</p>
  <div class="sandbox">
    <sidebar></sidebar>
    <main>
      <h1>Dashboard</h1>

      <div class='content'>
        <h3>Sales Report</h3>

        <ul>
          <li v-for="sale in sales" :key="sale.title">
            <strong>{{ sale.title}}</strong>
            <span>${{ sale.value }}</span>
          </li>
        </ul>
      </div>
    </main>
  </div>
  <h2 class="divider">Sollution</h2>
  <div class="sol sandbox">
    <sidebar></sidebar>
    <main>
      <h1>Dashboard</h1>

      <div class='content'>
        <h3>Sales Report</h3>

        <ul>
          <li v-for="sale in sales" :key="sale.title">
            <strong>{{ sale.title}}</strong>
            <span>${{ sale.value }}</span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ChallengeFive',
  data() {
    return {
      sales: [
        {
          title: 'Earnings',
          value: 1032,
        },
        {
          title: 'Refunds',
          value: 149,
        },
        {
          title: 'Chargebacks',
          value: 40,
        },
        {
          title: 'Net Income',
          value: 892,
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.sandbox {
  background: #014BCB;
  display: grid;
  grid-template-columns: 10% auto;
  height: 100vh;
  color: white;
  grid-gap: .5em;

  sidebar {
    background: #1D3154;
  }
  .content {
    background: #6C22FF;
    padding: .5em;
    width: 50%;
    margin-right: 2em;
    border-radius: .8em;
  }
  h1 {
    margin-left: 1em;
    font-size: 1em;
  }
  h3 {
    margin: 0;
    font-size: .9em;
    color: #FF69F5;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
  }
  li {
    margin-bottom: .5em;
    font-size: .8em;
  }
  span {
    float: right;
  }

}
.sol {
  grid-gap: 2em;

  h1 {
    margin-left: 0;
    font-size: 2em;
    margin-top: .5em;
  }

  h3 {
    color: white;
    font-size: 1.17em;
  }

  .content {
    padding: 1em;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>