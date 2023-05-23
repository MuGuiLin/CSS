# 伪类


> CSS伪类是用来添加一些选择器的特殊效果。


> 伪类选择元素基于的是当前元素处于的状态，或者说元素当前所具有的特性，而不是元素的id、class、属性等静态的标志。由于状态是动态变化的，所以一个元素达到一个特定状态时，它可能得到一个伪类的样式；当状态改变时，它又会失去这个样式。由此可以看出，它的功能和class有些类似，但它是基于文档之外的抽象，所以叫伪类。

### 语法格式

在选择器后面加上一个冒号:

例如 p:hover{}


1、:first-child

first-child表示选择列表中的第一个标签。例如：li:first-child{background:#fff}

2、:last-child

last-child表示选择列表中的最后一个标签，例如：li:last-child{background:#fff}

3、:nth-child(3)

表示选择列表中的第3个标签，例如：li:nth-child(3){background:#fff}，代码中的3也可以改成其它数字，如4、5等。想选择第几个标签，就填写几。

4、:nth-child(2n) 

这个表示选择列表中的偶数标签，即选择 第2、第4、第6…… 标签，例如：li:nth-child(2n){background:#fff}

5、:nth-child(2n-1)

这个表示选择列表中的奇数标签，即选择 第1、第3、第5、第7……标签，例如：li:nth-child(2n-1){background:#fff}

6、:nth-child(n+3)

这个表示选择列表中的标签从第3个开始到最后。

7、:nth-child(-n+3)

这个表示选择列表中的标签从0到3，即小于3的标签。

8、:nth-last-child(3)

这个表示选择列表中的倒数第3个标签。