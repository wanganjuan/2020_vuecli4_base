# vuecli_demo

# css bem 格式
使用 BEM 命名规范，理论上讲，每行 css 代码都只有一个选择器。

BEM代表 “块（block   m-、u-、分别代表：mod 模块、ui 元件）,元素（element  header title、menu item、list item）,修饰符（modifier  color、disabled、size）”,我们常用这三个实体开发组件。

.blockName__elementName__modifierName

由于服务端有gzip压缩，BEM命名相同的部分多，压缩下来的体积不会太大