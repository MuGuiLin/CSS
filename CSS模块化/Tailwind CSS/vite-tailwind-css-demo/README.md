# Vue 3 + TypeScript + Vite + Tailwind CSS 4

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).





### 1、创建项目

```shell
pnpm create vite

# 输入项目名

# 进入项目根据目录
cd 项目名
```

### 2、安装依赖

```shell
# 安装Tailwind CSS引擎依赖 和@tailwindcss/vite插件
pnpm add -D tailwindcss @tailwindcss/vite
```

### 3、配置 vite.config.ts

Tailwind CSS 4.x最大的变化就是**“零配置”** 优先，无需再配置tailwind.config.js 和 postcss.config.js 文件，所有配置都可以直接在vite.config.ts中完成

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入@tailwindcss/vite插件
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),  // 注入tailwindcss
  ],
  server: {
    port: 5173,
  },
})
```

### 4、引入tailwindcss

在工程src目录下的style.css文件中引入tailwindcss

```css
@import "tailwindcss";
```



### 5、安装编辑扩展：Tailwind CSS IntelliSense

在编辑应用商店中搜索 ：Tailwind CSS IntelliSense 安装即可
