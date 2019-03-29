# 边框 border

按需使用

```js
import 'tcon/dist/border.css'
// 一般配合 color 使用
import 'tcon/dist/color.css'

// or
import { border, color } from 'tcon'
```

自定义边框

```stylus
@import '~tcon/border/index.styl'
// 定义方位
dirAlias = {
  trbl: top right bottom left
}
gen(dirAlias)
```

边框只定义 style 和 width

```stylus
dirAlias = {
  '': '',
  t: top,
  r: right,
  b: bottom,
  l: left,
  lr: left right,
  tb: top bottom
  n: none
}
```

前缀为 `b`、`bl`、`br`、`blr`、`btb`。

:::tip
边框颜色，参见 [颜色](/basics/color.md)
:::

```stylus
.bd 
  border-style solid
  border-width 1px
.bl
  border-left-style solid
  border-left-width 1px
.bn
  border-style none
  border-width 0           
```


边框样式

```stylus
.bd-dotted
  border-style dotted
.bd-dashed
  border-style dashed
.bd-solid 
  border-style solid
.bd-none 
  border-style none
```

移动端边框提供，上边框 `.mbt` 和 下边框 `.mbb`，通过伪元素实现 `0.5px` 的宽度，边框颜色 `#eeeeee`。

自定义移动端边框
```stylus
@import '~tcon/border/index.styl'

dirMobileAlias = {
  t: top,
  b: bottom
}

colorMobile = #eeeeee #aaaaaa
genMobile(dirMobileAlias, colorMobile, 'suffix')
```
