<template>
  <section>
    <h1>
      Home
    </h1>
    <ul>
      <li v-for="product in data.data" :key="product.id">
        <h2>
          {{product.attributes.title}}
        </h2>
        <p>
          {{product.attributes.description}}
        </p>
        <NuxtLink :to="`/products/${product.id}`">more</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
  const { data } = await useFetch('http://localhost:1337/api/products/');
</script>