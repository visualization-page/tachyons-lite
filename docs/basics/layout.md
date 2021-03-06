# 布局 layout

按需引入

```js
import 'tcon/dist/layout.css' 
// or
import 'tcon/layout'
```

主要布局为 flex，还包括 float、position、display

::: tip
模块的样式都是单元式的，如需使用更多特性，请查看[组件 - 布局](/components/layout.md)
:::

flex 定义：

| flex 类 | 样式 |
|------|------|
| 容器 |  |
|flex| { display: flex; } |
|flex-column| { flex-direction: column; } |
|flex-row| { flex-direction: row; } |
|flex-wrap| { flex-wrap: wrap; } |
|flex-shrink-0| { flex-shrink: 0; } |
|flex-grow-1| { flex-grow: 1; } |
| 水平方向 |  |
|justify-start|   { justify-content: flex-start; }|
|justify-end   |  { justify-content: flex-end; }|
|justify-center | { justify-content: center; }|
|justify-between |{ justify-content: space-between; }|
|justify-around  |{ justify-content: space-around; }|
| 垂直方向 |  |
|items-center   |{ align-items: center; }|
|items-baseline |{ align-items: baseline; }|
|content-center  |{ align-content: center; }|

其余定义：

|类|样式|
|----|----|
|relative|{ position: relative; }|
|absolute|{ position: absolute; }|
|fixed|{ position: fixed; }|
|sticky|{ position: sticky; }|
|fl|{ float: left; }|
|fr|{ float: right; }|
|fn|{ float: none; }|
|dn|{ display: none; }|
|di|{ display: inline; }|
|db|{ display: block; }|
|dib|{ display: inline-block; }|
