
# Less（Leaner Style Sheets ）

##### Less 它是 CSS，只是多了一点东西。是一种向后兼容的 CSS 语言扩展。js 是将 Less 样式转换为 CSS 样式的 JavaScript 工具。

![Less-logo](https://lesscss.cn/public/img/less_logo.png)

**Less官网 :[http://lesscss.cn/](http://lesscss.cn/)**



# 如何在VSCode代码编辑器中 使用LESS

1. ‌**安装 Easy LESS 扩展**‌：

   - 在 VSCode 中，转到扩展视图。
   - 搜索 `Easy LESS` 扩展，点击 `install` 安装即可。

2. ‌**使用 Easy LESS**‌：

   - 新建一个xxx.less 文件。

     - 在xxx.less 文件的最上面可以指定编译输出路径 和 输出文件名

       ```less
       // out: ../css/
       
       // 注：在VSCode编辑器中安装了Easy LESS 插件后，在.less文件中设置好.css文件输入路径out: ../css/，在修改样式保存时，会自动将LESS编译后生成到对应的.css文件中。
       
       * {
           margin: 0;
           padding: 0;
       }
       ```

       

   - 在xxx.less 文件中编写好less语法的样式代码保存文件时，Easy LESS 扩展就会自动编译 LESS代码 到 CSS代码啦。

   - 你也可以通过右键点击 LESS 文件并选择“Compile File”手动编译。





# 概述

> Less（Leaner Style Sheets 的缩写）是一种向后兼容的 CSS 语言扩展。这是 Less 语言和 Less.js 的官方文档，Less.js 是将 Less 样式转换为 CSS 样式的 JavaScript 工具。

因为 Less 看起来就像 CSS，所以学习起来很容易。Less 只对 CSS 语言做了一些方便的补充，这也是它可以学得这么快的原因之一。

- 有关 Less 语言特性的详细文档，请参阅 [特性](https://lesscss.cn/#)
- 有关 Less 内置函数的列表，请参阅 [函数](https://lesscss.cn/#)
- 详细使用说明，请参阅 [使用 Less.js](https://lesscss.cn/#)
- Less 的第三方工具，请参阅 [工具](https://lesscss.cn/#)

Less 给 CSS 增加了什么？以下是功能的快速概述。



# 变量

这些都是不言自明的：

```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

输出：

```css
#header {
  width: 10px;
  height: 20px;
}
```

**[了解有关变量的更多信息](https://lesscss.cn/features/#variables-feature)**



# 混入

混入是一种将一组属性从一个规则集中包含（"混合进入"）到另一个规则集中的方法。所以说我们有以下类：

```css
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

我们希望在其他规则集中使用这些属性。好吧，我们只需要放入我们想要属性的类的名称，如下所示：

```less
#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}
```

`.bordered` 类的属性现在将出现在 `#menu a` 和 `.post a` 中。（请注意，你也可以将 `#ids` 用作混入。）

**[了解有关混合的更多信息](https://lesscss.cn/features/#mixins-feature)**



# 嵌套

Less 使你能够使用嵌套代替级联，或与级联结合使用。假设我们有以下 CSS：

```css
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

在 Less 中，我们也可以这样写：

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

生成的代码更加简洁，并且模仿了 HTML 的结构。

你还可以使用此方法将伪选择器与混入打包在一起。这是经典的 clearfix hack，重写为混入（`&` 代表当前选择器父级）：

```less
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

**[了解有关父选择器的更多信息](https://lesscss.cn/features/#parent-selectors-feature)**



## 嵌套的 @ 规则和冒泡

诸如 `@media` 或 `@supports` 之类的 @ 规则可以以与选择器相同的方式嵌套。@ 规则放在最前面，与同一规则集中其他元素的相对顺序保持不变。这称为冒泡。

```less
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
```

输出：

```css
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```



# 操作

算术运算 `+`、`-`、`*`、`/` 可以对任何数字、颜色或变量进行运算。如果可能，数学运算会考虑单位并在加、减或比较之前转换数字。结果在最左边有明确说明的单位类型。如果转换不可能或没有意义，则忽略单位。不可能转换的例子：px 到 cm 或 rad 到 %。

```less
// numbers are converted into the same units
@conversion-1: 5cm + 10mm; // result is 6cm
@conversion-2: 2 - 3cm - 5mm; // result is -1.5cm

// conversion is impossible
@incompatible-units: 2 + 5px - 3cm; // result is 4px

// example with variables
@base: 5%;
@filler: @base * 2; // result is 10%
@other: @base + @filler; // result is 15%
```

乘法和除法不转换数字。大多数情况下没有意义 - 长度乘以长度得出面积，而 css 不支持指定面积。Less 将按原样对数字进行运算，并将明确声明的单位类型分配给结果。

```less
@base: 2cm * 3mm; // result is 6cm
```

你还可以对颜色进行算术运算：

```less
@color: (#224488 / 2); // result is #112244
background-color: #112244 + #111; // result is #223355
```

但是，你可能会发现 Less 的 [颜色函数](https://lesscss.cn/functions/#color-operations) 更有用。

从 4.0 开始，不会使用 `/` 运算符在括号外执行除法。

```less
@color: #222 / 2; // results in `#222 / 2`, not #111
background-color: (#FFFFFF / 16); //results is #101010
```

你可以改变 [数学](https://lesscss.cn/usage/#less-options-math) 设置，如果你想让它一直有效，但不推荐。



## calc() 异常

发布于 [v3.0.0](https://lesscss.cn/#)

为了 CSS 兼容性，`calc()` 不计算数学表达式，但会计算嵌套函数中的变量和数学。

```less
@var: 50vh/2;
width: calc(50% + (@var - 20px));  // result is calc(50% + (25vh - 20px))
```



# 转义

转义允许你使用任意字符串作为属性或变量值。`~"anything"` 或 `~'anything'` 中的任何内容都按原样使用，除了 [插值](https://lesscss.cn/features/#variables-feature-variable-interpolation) 之外没有任何变化。

```less
@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```

结果是：

```less
@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}
```

注意，从 Less 3.5 开始，你可以简单地写：

```less
@min768: (min-width: 768px);
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```

在 3.5+ 中，许多以前需要 "引号转义" 的案例不再需要了。



# 函数

Less 提供了许多函数，可以转换颜色、操作字符串和进行数学运算。它们在 [函数参考手册](https://lesscss.cn/#) 中有完整的记录。

使用它们非常简单。以下示例使用百分比将 0.5 转换为 50%，将基色的饱和度增加 5%，然后将背景颜色设置为亮 25% 并旋转 8 度的颜色：

```less
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
```

**[查阅：函数参考](https://lesscss.cn/#)**



# 循环

在less中，混合可以调用它自身，这样，当一个混合递归调用自己，再结合Guard表达式和模式匹配这两个特性，就可以写出个循环结构。

```less
.loop( @count ) when( @count > 0 ){
    h@{count}{
        padding: ( 10px * @count );
    }
    .loop((@count - 1));
}

div{
    .loop(5);
}

// 输出后的.css
div h5 {
  padding: 50px;
}
div h4 {
  padding: 40px;
}
div h3 {
  padding: 30px;
}
div h2 {
  padding: 20px;
}
div h1 {
  padding: 10px;
}
```





# 命名空间和访问器

（不要与 [CSS `@namespace`](https://lesscss.cn/#) 或 [命名空间选择器](http://www.w3.org/TR/css3-selectors/#typenmsp) 混淆）。

有时，出于组织目的或只是为了提供一些封装，你可能希望对混入进行分组。你可以在 Less 中非常直观地做到这一点。假设你想在 `#bundle` 下打包一些混入和变量，以供以后重用或分发：

```less
#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  .tab { ... }
  .citation { ... }
}
```

现在如果我们想在我们的 `#header a` 中混合 `.button` 类，我们可以这样做：

```less
#header a {
  color: orange;
  #bundle.button();  // can also be written as #bundle > .button
}
```

注意：如果你不希望它出现在你的 CSS 输出中（即 `#bundle .tab`），请将 `()` 附加到你的命名空间（例如 `#bundle()`）。



# 映射

从 Less 3.5 开始，你还可以使用混入和规则集作为值映射。

```less
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```

如预期的那样输出：

```css
.button {
  color: blue;
  border: 1px solid green;
}
```

**[也可以看看：映射](https://lesscss.cn/features/#maps-feature)**



# 作用域

Less 中的作用域与 CSS 中的作用域非常相似。首先在本地查找变量和混入，如果找不到，则从 "父级" 作用域继承。

```less
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
```

与 CSS 自定义属性一样，混入和变量定义不必放在引用它们的行之前。所以下面的 Less 代码与前面的例子是一样的：

```less
@var: red;

#page {
  #header {
    color: @var; // white
  }
  @var: white;
}
```

**[也可以看看：延迟加载](https://lesscss.cn/features/#variables-feature-lazy-loading)**



# 注释

块式注释和行内注释都可以使用：

```less
/* One heck of a block

 * style comment! */
@var: red;

// Get in line!
@var: white;
```



# 导入

导入工作与预期的差不多。你可以导入一个 `.less` 文件，其中的所有变量都将可用。可选地为 `.less` 文件指定扩展名。

```css
@import "library"; // library.less
@import "typo.css";
```

**[了解有关导入的更多信息](https://lesscss.cn/features/#imports-feature)**
