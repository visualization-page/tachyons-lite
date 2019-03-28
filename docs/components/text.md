# 文本

```stylus
// 单行溢出
.th1
  @hidden
  @ellipsis
  @nowrap

// 2 行溢出
.th2
  display -webkit-box
  -webkit-line-clamp 2
  -webkit-box-orient vertical
  @hidden
  @ellipsis
```
