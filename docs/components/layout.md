# 布局 layout

组件布局包含了常用模块的组合

flex 类

```stylus
.flex-center
  @extend .flex, .justify-center, .items-center

.flex-center-between
  @extend .flex, .justify-between, .items-center

.flex-center-justify
  @extend .flex, .justify-center

.flex-center-align
  @extend .flex, .items-center

.flex-between
  @extend .flex, .justify-between
```

其余类

```stylus
.fixed-center
  @extend .fixed, $center

.fixed-bottom
  @extend .fixed
  bottom 0

.absolute-center
  @extend .absolute, $center

.absolute-bottom
  @extend .absolute
  bottom 0

.dib-middle
  @extend .dib, $vm

.dib-top
  @extend .dib, $vt
```

