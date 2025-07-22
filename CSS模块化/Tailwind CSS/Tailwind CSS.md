# Tailwind CSS

### 🏡前言

> 在Web前端开发的历史长河中，CSS的编写方式经历了多次演进，从早期的`原生CSS`  到  `CSS预处理(Less/Sass/Stylus)`   到  `CSS-in-JS(Styled-Components/Emotion) `  到  `Utility-First 原子化CSS`。每一种演进方案本质都是围绕“开发效率”、“运行性能”、”可维护性“ 这三个核心点之间寻找最佳平衡。



#### 原生CSS & CSS预处理（Less / Sass / Stylus）

> 开发人员手动编写`.css文件` 、`.less文件等`，然后通过`<link>标签` 或 `@import`引入使用

- **存在问题：**当随着项目变大，很快就会面临命名冲突、代码冗余、缺乏逻辑组织、难以维护等
- **解决方案：**
  - **CSS命名规范(BEM)：**[CSS-BEM 命名规范](https://bemcss.com)通过严格的命名约定来约束作用域，增强代码的可读性和可维护性，是一种用于CSS模块化开发的命名约定规范，但它依赖于开发人员的自觉性，且class类名很长。
  - **CSS预处理([Less](https://lesscss.cn/) / [Sass](https://www.sass.hk/) / [Stylus](https://github.com/stylus/stylus))：**引入了变量、嵌套、混入、继承等编程概念，虽然增强了CSS的组织性和可复用性，但是并未从根本上解决命名他全局污染的问题。



#### CSS-in-JS（Styled-Components / Emotion)）

> CSS-IN-JS这种解决方案，它提倡我们把CSS代码写在JavaScript代码当中，在React JSX/TSX等类似的组件化框架兴起后，也将CSS样式视为组件的一部分。

- **核心：**[styled-components](https://github.com/styled-components/styled-components)、[Emotion ](https://emotion.sh/docs/introduction)将CSS样式直接写在JavaScript文件中，为每个组件生成唯一的、带哈希值的类名，从而实现“作用域化样式”，彻底避免了全局污染的问题。
- **优势：**
  - **组件化：**样式与逻辑类聚，方便复用和维护。
  - **动态样式：**可以方便的基于组件的`state` 或 `props`来动态改变样式。
- **问题：**
  - **心智负担：**要在JavaScript 和 CSS 之间来回的切换语法，而且需要一定的学习成本去学习特定库的API。
  - **运行开销：**CSS样式不是提前生成的，而是在运行时解析JavaScript并动态生成CSS，所带来一定的性能损耗。



#### Utility-First CSS(Tailwind CSS / UnoCSS)

> 原子化CSS 是一种与传统“语义化CSS”截然不同的思路，它提供了一系列高度可组合的、功能单一的“原子类”(Atomic CSS / Utility Classes)。

- **核心：**开发人员无需再为组件编写专门的CSS类，而是直接在HTML中组合这些原则来构建样式。

  ```html
  <!-- 传统写法：-->
  <style>
      .btn-primary{
          padding: 8px 16px;
          color: white;
          border-radius: 4px;
          background-color: blue;
      }
  </style>
  <button class="btn-primary">提交</button>
  
  <!-- 原子化CSS：-->
  <button class="py-2 px-4 text-white rounded bg-blue-500">提交</button>
  ```

- **优势：**

  - 无需思考命名：从根本上消除了为class命名的烦恼。
  - 无需切换文件：样式和结构在一起，开发人员心流不被打断。
  - 约束与一致性：所有样式都来自预设的design tokens(在`tailwind.config.js文件`中定义)，保证了整个项目在视觉上的一致性。
  - 性能佳体积小：通过类似[PurgeCSS](https://www.purgecss.cn/)等工具，在构建项目时自动分析扫描，首先它将 CSS 文件中使用的选择器与内容文件中的选择器进行匹配，然后它会从 CSS 中删除未使用的选择器，从而生成更小的 CSS 文件。



### 🏡Tailwind CSS简介

[Tailwind CSS 官网 https://tailwindcss.com](https://tailwindcss.com)

<img width="300" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" />

> Tailwind CSS 是一个实用优先的 CSS 框架，与传统的框架（如 Bootstrap、Foundation）不同，它没有预定义的组件，而是提供了一系列原子化的 CSS 类，允许你直接在 HTML 中应用样式。
>
> Tailwind CSS 是一个工具优先的框架，意味着它提供了大量的预定义类，而不是预设的组件,这使得开发者可以构建几乎任何设计，而不需要编写 CSS。
>
> 简而言之，只需要知道类名以及对应的属性和值范围就OK了！





### 📊Vite项目实例

这里以Vite + Vue3 + TypeScript + Tailwind CSS 4 为项目实例

#### 1、创建项目

```shell
# pnpm create vite
pnpm create vue@latest

# 输入项目名，这里以tailwind-css-demo为例
tailwind-css-demo

# 进入tailwind-css-demo项目根目录
cd tailwind-css-demo
```



#### 2、安装依赖

```shell
# 安装vite项目依赖
pnpm install

# 安装Tailwind CSS引擎依赖 和@tailwindcss/vite插件
pnpm add -D tailwindcss @tailwindcss/vite

```



#### 3、配置 vite.config.ts

Tailwind CSS 4.x最大的变化就是**“零配置”** 优先，无需再配置tailwind.config.js 和 postcss.config.js 文件，所有配置都可以直接在vite.config.ts中完成

```ts
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// 引入@tailwindcss/vite插件，在编译时自动将class类名对应的样式提取出来添加到style标签中
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss(),  // 注入tailwindcss
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    // host: '0.0.0.0',
    // port: 8080,
    open: true,
    cors: true,
  },
})

```



#### 4、引入tailwindcss

在前端项目工程`src`目录中的全局`style.css`样式文件中引入 tailwindcss 核心库

```css
@import "tailwindcss";

# https://tailwindcss.com/docs/preflight
```



#### 5、编辑器扩展：Tailwind CSS IntelliSense

在编辑器，如VSCode应用商店中搜索 ：**Tailwind CSS IntelliSense** 安装即可，[Tailwind CSS IntelliSense - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)，具体使用了解更多[扩展配置说明https://tailwindcss.com/docs/editor-setup](https://tailwindcss.com/docs/editor-setup)



#### 6、使用Tailwind CSS

完成以上步骤以后，就可以在项目任意HTML标签中的class属性中添加原子类了，同时还支持响应试设计：`sm`，`md`， `lg`，`xs`、`xl`等，例如`w-lg`表示在中等屏幕，通过不同的修饰符，快速得到对应状态样式。

**使用实用程序类（Utility Classes）进行样式设置**

这是Tailwind的基石，每一个类名都代表一个 **单一**、**不可再分**的CSS样式属性，例如，以下是常用的Tailwind CSS 原子类 与 原生CSS样式属性 对照情况。

[🚀查看更多Tailwind CSS 原子类](https://tailwindcss.com/docs/installation/using-vite)

| Tailwind CSS 原子类              | 原生CSS样式属性                                    |
| -------------------------------- | -------------------------------------------------- |
| `flex`、`grid`                   | `display: flex;`、`display: grid;`                 |
| `justify-center`、`items-center` | `justify-content: center;`、`align-items: center;` |
| `box-border`                     | `box-sizing: border-box;`                          |
| `float-left`                     | `float: left;`                                     |
| `absolute`、`relative`           | `position: absolute;`、`position: relative;`       |
| `w-px`、`w-[50px]`、`w-full`     | `width: 1px;`、`width: 50px;`、`width: 100%;`      |
| `text-xs`                        | `font-size: 0.75rem(12px) ;`                       |
| `text-<size>/<number>`           | `font-size: <size>;`                               |
| `text-center`                    | `text-align: center;`                              |
| `text-white`                     | `color: #fff;`                                     |
| `font-bold`                      | `font-weight: 700;`                                |
| `bg-white`                       | `background-color: #000;`                          |
| `bg-red-500`                     | `background-color: #fb2c36;`                       |
| `shadow-2xs`                     | `box-shadow: 0 1px rgb(0 0 0 / 0.05);`             |
| `text-shadow-xs`                 | `text-shadow: 0px 1px 1px rgb(0 0 0 / 0.2); `      |
| `rounded-xs`                     | `border-radius: 0.125rem (2px);`                   |
| `cursor-pointer`                 | `cursor: pointer;`                                 |

**颜色（Colors）**

Tailwind CSS 定义了一系列符合大众UI的色阶，可根据自己需要选择使用，当然如果在不满足你的需求时可以在方括号中，如`text-[#000]` 来自定义任意色值。

[🚀Tailwind CSS 色值体系](https://tailwindcss.com/docs/colors) 

```html
<body>
    <div class="text-red-500">
    红色文字
    </div>
    <div class="bg-blue-500">
        蓝色背景
    </div>
    <div class="bg-[#FFF]">
        自定义白色背景
    </div>
</body>
```

![image-20250717140148922](D:\GitHub\CSS\CSS模块化\Tailwind CSS\Tailwind CSS Colors调色板.png)



#### 7、自定义Tailwind CSS原子类

- **@layer** 如果在Tailwind CSS中，原有的原子类不能满足需求时，可在全局`style.css`样式文件中通过使用`@layer{...}`来添加自定义的原子类。

  ```css
  @import "tailwindcss";
  
  :root {
      --color-primary: 
      --color-primary-100:
          
      --color-success:
      --color-success-100:
  }
  
  @layer {
      .item {
  		position: relative;
  
  		&::after {
  			content: '';
  			display: inline-block;
  			position: relative;
  			top: 1px;
  			width: 18px;
  			height: 12px;
  			background: url('@/assets/img/not.webp') no-repeat center center;
  			background-size: contain !important;
  		}
  	}
  
  	.item_active {
  		b::after {
  			background: url('@/assets/img/yes.webp') no-repeat center center;
  		}
  	}
  
  	.type_primary {
  		border: 2px solid var(--color-primary);
  		background-color: var(--color-primary-100);
  	}
  
  	.type_success {
  		color: var(--color-success);
  		background-color: var(--color-success-100);
  	}
  }
  ```

  ```html
  <body>
      <ul class="m-5 p-2">
          <li class="item">
          	<span class="type_primary">primary</span>
              <span class="type_success">success</span>
          </li>
      </ul>
  </body>
  ```

  

- **@theme 主题、变量定义**，在

  ```css
  @import "tailwindcss";
  
  @theme {
    --mu-primary: #409eff;
    --mu-primary-hover: #155dfc;
  
    --mu-success: #67c23a;
    --mu-success-hover: #4c8b2f;
  
    --mu-warning: #e6a23c;
    --mu-warning-hover: #c88b2f;
  
    --mu-danger: #f56c6c;
    --mu-danger-hover: #d33f3f;
  
    --mu-info: #909399;
    --mu-info-hover: #7c7c7c;
  }
  
  ```

  

- **@apply 组合现有工具类**，如果有一些原子类经常被反复的使用时，就可以通过`@apply{...}`将它们组合成一个新的原子类，在使用时，只需使用那个新的原子类名即可！

  ```css
  @import "tailwindcss";
  
  .btn-primary {
  	@apply px-5 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 hover:cursor-pointer
  }
  ```

  

  ```html
  <body>
      <button class="px-5 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 hover:cursor-pointer">反复使用时</button>
      
      <!-- 调用新的组合原子类名 -->
      <button class="btn-primary">组合使用后</button>
  </body>
  ```

  

- @utility 

  ```css
  @import "tailwindcss";
  
  @theme {
    --mu-primary: #409eff;
    --mu-primary-hover: #155dfc;
  
    --mu-success: #67c23a;
    --mu-success-hover: #4c8b2f;
  
    --mu-warning: #e6a23c;
    --mu-warning-hover: #c88b2f;
  
    --mu-danger: #f56c6c;
    --mu-danger-hover: #d33f3f;
  
    --mu-info: #909399;
    --mu-info-hover: #7c7c7c;
  }
  
  @utility btn-* {
    @apply px-5 py-2 rounded-md text-white hover:cursor-pointer;
    background-color: --value(--mu-*);
    &:hover {
      background-color: --value(--mu-*-hover);
    }
  }
  ```

  

  ```html
  <body>
      <button class="btn-primary">主要样式颜色</button>
      <button class="btn-success">成功样式颜色</button>
      <button class="btn-warning">警告样式颜色</button>
  </body>
  ```

  

  





