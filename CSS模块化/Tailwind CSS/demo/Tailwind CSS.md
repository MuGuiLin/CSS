# Tailwind CSS

### 🏡前言

> 在Web前端开发的历史长河中，CSS的编写方式经历了多次演进，从早期的手写原生CSS -》 CSS预处理(Less/Sass/Stylus) -》CSS-in-JS(Styled-Components/Emotion) -》CSS原子化。每一种演进方案本质都是围绕“开发效率”、“运行性能”、”可维护性“ 这三个核心点之间寻找最佳平衡。



#### 原生CSS & CSS预处理(Less/Sass/Stylus)

> 开发人员手动编写`.css`文件，通过`<link>`标签引入使用

- **面临痛点：**当随着项目变大，很快就会面临命名冲突、代码冗余、缺乏逻辑组织、难以维护等
- **解决方案：**
  - **CSS命名规范(BEM)：**通过严格的命名约定来约束作用域，增强代码的可读性和可维护性，[CSS-BEM 命名规范](https://bemcss.com)j 一种用于CSS模块化开发的命名约定规范，但它依赖于开发人员的自觉性，且class类名很长。
  - **CSS预处理(Less/Sass/Stylus)：**引入了变量、嵌套、混入、继承等编程概念，虽然增强了CSS的组织性和可复用性，但是并未从根本上解决命名他全局污染的问题。



#### CSS-in-JS(Styled-Components/Emotion) 

> 在React JSX/TSX 



### 🏡Tailwind CSS简介

> Tailwind CSS 是一个实用优先的 CSS 框架，与传统的框架（如 Bootstrap、Foundation）不同，它没有预定义的组件，而是提供了一系列原子化的 CSS 类，允许你直接在 HTML 中应用样式。
>
> Tailwind CSS 是一个工具优先的框架，意味着它提供了大量的预定义类，而不是预设的组件,这使得开发者可以构建几乎任何设计，而不需要编写 CSS。
>
> 简而言之，只需要知道类名以及对应的属性和值范围就OK了！