import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入@tailwindcss/vite插件，在编译时自动将class类名对应的样式提取出来添加到style标签中
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
