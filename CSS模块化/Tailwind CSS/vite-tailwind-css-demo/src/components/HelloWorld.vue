<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="my-5 py-3 bg-purple-500 text-center text-white text-4xl shadow-lg">{{ msg }}</h1>
  <section class="relative p-10 h-100 border-1 border-gray-500">

    <div>
      <button type="button" class="p-3 text-white  bg-blue-500 rounded-md" @click="count++">count is {{ count }}</button>
      <p class="p-3 bg-white text-black  hover:bg-blue-500 text-red-500">
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Learn more about IDE Support for Vue in the
      <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
        >Vue Docs Scaling up Guide</a
      >.
    </p>
    <p class="absolute bottom-0 w-full text-right text-blue-500">Click on the Vite and Vue logos to learn more</p>
  </section>
</template>