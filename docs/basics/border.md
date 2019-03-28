# 边框

边框只定义 style 和 width

:::tip
边框颜色，参见 [颜色](/basics/color.md)
:::

```stylus
.bd 
  border-style solid
  border-width 1px
.bt
  border-top-style solid
  border-top-width 1px
.br
  border-right-style solid
  border-right-width 1px
.bb
  border-bottom-style solid
  border-bottom-width 1px
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

:::tip
移动端边框提供，上边框 `.mbt` 和 下边框 `.mbb`，通过伪元素实现 `0.5px` 的宽度，边框颜色 `#eeeeee`。
:::
