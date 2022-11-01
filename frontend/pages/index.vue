<template>
  <section>
    <h1>i like bikes</h1>
    <ul>
      <li v-for="bike in bikes.data">
        <BikeTeaser :bike="bike.attributes"></BikeTeaser>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">

const { find } = useStrapi()

const bikeParams = {
  populate: '*',
}

const bikes = await find<IBike>('bikes', bikeParams)

</script>

<style scoped>

ul {
  list-style: none;
  padding: unset;
}

</style>