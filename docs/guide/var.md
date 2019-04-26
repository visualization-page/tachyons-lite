# 配置文件

定义范围

- 字体大小 `font-size`
- 宽度 `width-size`
- 高度 `height-size`
- 外边距 `margin-size`
- 内边距 `padding-size`
- 颜色 `color`
- 圆角大小 `radius-size` 
- 层级 `index-size` 
- 按钮大小 `btn-size`

自定义

```
# 1. 编写自己的配置文件 
style/tcon/tcon-var.js

# 2. 安装 `tcon-cli`
cnpm i tcon-cli --save

# 3. 生成样式
tcon --i=style/tcon/tcon-var.js --o=style/tcon
```

