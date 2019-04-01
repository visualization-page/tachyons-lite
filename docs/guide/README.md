# 介绍

Tcon css 给每个业务项目提供高度抽象无冗余的原子型 css 库。其命名遵循 Tachyons，源文件采用 Stylus。

特性：

- 提供 babel 插件简化写法：[babel-plugin-tcon](https://github.com/visualization-page/babel-plugin-tcon)

- 提供 cli 处理定制化：[tcon-cli](https://github.com/visualization-page/tcon-cli) 

- 尺寸 size 单位同时支持 px 和 vw，例如：字体 20px，px 表示：f20，vw 表示：vw-f20

- 模块定制化，例如定义字体范围
  ```stylus
  @import '~tcon/src/size/index.styl'
  
  // 如果不需要支持 vw，则添加
  noVwList = font-size
  
  font-size = 10 12 13
  gen('font-size', font-size, false)

  // .f10 { font-size: 10px; }
  // .f12 { font-size: 12px; }
  // .f13 { font-size: 13px; }
  // .vw-f10 { font-size: 2.67vw; }
  ```
