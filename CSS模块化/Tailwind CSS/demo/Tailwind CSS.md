# Tailwind CSS

### 🏡前言

> 在Web前端开发的历史长河中，CSS的编写方式经历了多次演进，从早期的手写原生CSS -》 CSS预处理(Less/Sass/Stylus) -》CSS-in-JS(Styled-Components/Emotion) -》Utility-First 原子化CSS。每一种演进方案本质都是围绕“开发效率”、“运行性能”、”可维护性“ 这三个核心点之间寻找最佳平衡。



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



#### Utility-First 原子化CSS(Tailwind CSS / UnoCSS)

> 

### 🏡Tailwind CSS简介

> Tailwind CSS 是一个实用优先的 CSS 框架，与传统的框架（如 Bootstrap、Foundation）不同，它没有预定义的组件，而是提供了一系列原子化的 CSS 类，允许你直接在 HTML 中应用样式。
>
> Tailwind CSS 是一个工具优先的框架，意味着它提供了大量的预定义类，而不是预设的组件,这使得开发者可以构建几乎任何设计，而不需要编写 CSS。
>
> 简而言之，只需要知道类名以及对应的属性和值范围就OK了！