<template>
  <div class="h-full flex flex-col">
    <nav class="p-4 flex gap-4 bg-orange-300">
      <NuxtLink to="/">Quiz App</NuxtLink>
    </nav>
    <main class="flex-1 flex flex-col">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Quiz App',
  htmlAttrs: {
    lang: 'en',
    class: 'h-full'
  },
  bodyAttrs: {
    class: 'h-full'
  }
})
</script>
