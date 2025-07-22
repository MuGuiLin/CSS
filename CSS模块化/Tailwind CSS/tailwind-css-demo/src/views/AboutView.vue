<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="px-5 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 hover:cursor-pointer" @click="goHome">Go Home</button>
    <button class="btn btn-primary" @click="goAbout">主要样式颜色</button>
    <button class="btn btn-success" @click="goAbout">成功样式颜色</button>
    <button class="btn btn-warning" @click="goAbout">警告样式颜色</button>
    <button class="btn btn-danger" @click="goAbout">危险样式颜色</button>
    <button class="btn btn-info" @click="goAbout">信息样式颜色</button>
    <button class="btn btn-info text-[#000] bg-[#fff]" @click="goAbout">信息样式颜色</button>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
