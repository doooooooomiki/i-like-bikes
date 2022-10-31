<template>
  <section>
    <h1>i like bikes</h1>
    <pre>
      {{response}}
    </pre>
  </section>
</template>

<script setup lang="ts">
const { find } = useStrapi()
const response = await find<IBike>('bikes')
</script>