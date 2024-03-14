# [https://www.parceljs.cn/stylus.html](https://www.parceljs.cn/stylus.html)



### 安装

1. 先安装好 node 环境。

2. 打开命令行：npm install stylus -g 。

3. 在项目中建立一个 name.styl 文件(注意后缀名.styl)。

4. 在当前目录下 Sheft + 右键 选在此处打开命令行窗口

5. 输入 stylus -w --compress name.styl 




### 这个时候表示生成功了，此时在当前目录下会多一个编译后的 name.css 


参数说明：

-w 表示自动编译

--compress 表示生成压缩的css文件。

将 .css文件 转换成 .styl文件

stylus --css css/example.css css/out.styl  

$ stylus help box-shadow css属性的帮助 

$ stylus --css test.css 输出生成一个文件名一样的.styl文件