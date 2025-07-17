<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="text-center">
    <h1 class="text-4xl/loose text-white !font-bold ">
      {{ msg }}</h1>
    <h3 class="pb-2 text-2xl text-green-600">
      You’ve successfully created a project with
      <a class="hover:!font-bold text-white" href="https://vite.dev/" target="_blank" rel="noopener">Vite 4</a> +
      <a class="hover:!font-bold text-white" href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> +  
      <a class="hover:!font-bold text-white" href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwind 4 CSS</a> . What's next

    </h3>
  </div>
</template>