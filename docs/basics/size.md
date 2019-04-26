# 尺寸 size

按需使用

```js
import 'tcon/dist/size.css'
// or
import 'tcon/size'
```

也可以引入源文件，自定义尺寸范围，[源码](https://github.com/visualization-page/tcon/blob/77388775b6cb62e8ac8c39db1fc0c1e5bc62d490/src/size/index.styl#L40)参考

```stylus
@import '~tcon/src/size/index.styl'

// 自定义
margin-size = 1 2 3 4
// 生成 css
gen('margin') 
```

尺寸的范围包含：字体大小、宽度、高度、外边距、内边距、上右下左距离(top、right、bottom、left)、层级、圆角。

其中，宽度和高度包含了百分比，边距与距离包含方位"上右下左"，分别为"trbl"。 

```stylus
font-size = 10 12 13 14 15 16 17 18 20 24 28 32 40
width-size = 30 40 50 60 70 80 90 100 200
height-size = 30 35 40 45 50 55 60 65 70 80 90 100
margin-size = 5 10 15 20 30 40 45 50 55 60
padding-size = 5 10 15 20 25 30 35 40 45 50
position-size = 0 10 20 30 40 50

// 宽度百分比
width-percent = 20 25 33.3333 50 100

// 高度百分比
height-percent = 50 100

// 方向
direction = {
  t: top,
  r: right, 
  b: bottom,
  l: left,
  tb: top bottom,
  tr: top right,
  lt: left top,
  lr: left right,
  lb: left bottom  
}

// 层级，不支持 vw
index-size = 1 2 3 4 5 6 7 8 9 1000 1001 1002 1003 9999 10000

// 圆角，不支持 vw
radius-size = 1 2 3 4 5 6 7 8 10 15 20 
```

例子：

- 字体，`f10`，`f12`，`vw-f10`，`vw-f12`
- 宽度，`w30`，`w40`
  - 百分比，`width-20`，`width-100`，`height-100`
- 高度，`h30`，`h40`
  - 百分比，`height-100`
  :::warning
  考虑到实际应用场景，减量减少代码冗余，宽、高不支持 vw。可以在[自定义生成](https://github.com/visualization-page/tcon/blob/77388775b6cb62e8ac8c39db1fc0c1e5bc62d490/src/size/index.styl#L25)时，使 `forceVw = true` 来支持。
  :::
- 外边距，`m5`，`m10`，`vw-m10`，`vw-m5`
  - 上外边距，`mt5`，`vw-mt5`
  - 右外边距，`mr5`，`vw-mr5`
  - 下外边距，`mb5`，`vw-mb5`
  - 左外边距，`ml5`，`vw-ml5`
  - 左右自适应，`m-auto` 
- 内边距，`p5`，`p10`，`p15`
  - 上内边距，`pt5`，`pt10`，`vw-pt5`
  - 右内边距，`pr5`，`pr10`，`vw-pt5`
  - 下内边距，`pb5`，`pb10`，`vw-pb10`
  - 左内边距，`pl5`，`vw-pb10`
- 距离
  - 上距离，`t5`，`t10`，`vw-t5`
  - 右距离，`r5`，`r10`，`vw-r5`
  - 下距离，`b5`，`b10`，`vw-b5`
  - 左距离，`l5`，`l10`，`vw-l5`
- 层级，`z1`，`z999`
- 圆角，`br1`，`br10`

