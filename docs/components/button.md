# 按钮 button

按钮的定义分为尺寸和颜色

- 尺寸：内边距、圆角、字体大小
- 颜色：字体颜色、背景色、边框色、hover 颜色（可选）

按需引入

```js
import 'tcon/dist/button.css'
// or
import { button } from 'tcon'
```

自定义按钮
```stylus
@import '~tcon/src/button/index.styl'

// 1 自定义大小
btn-size = {
  aaa: {
    padding: 7 30,
    border-radius: 4,
    font-size: 16
  }
}
// 调用生成函数
gen(btn-size, true)

// 2 自定义色值
btn-skin = {
  bbb: {
    color: #fff,
    background-color: #fff,
    border-color: #fff
  }
}
// 调用生成函数
gen(btn-skin)
```

例子

```html
<div class="btn btn-main">
  提 交
</div>
```


