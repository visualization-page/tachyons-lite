# 颜色 color

按需引入

```js
import 'tcon/dist/color.css'
// or
import 'tcon/color'
```

自定义生成

```stylus
@import '~tcon/src/color/index.styl'

// 自定义 color 键值对
color = {
  a: #aaaaaa
}
gen(color)
```

颜色分为字体色、背景色和边框色，前缀分别为 `.c-` 、 `.bg-` 和 `.bd-`

```stylus
alias = {
  color: c,
  background-color: bg,
  border-color: bd
}
```

颜色示例：

<docs-color :color="color" />

变量定义

<pre style=color:#fff>
{{ colorStyl }}
</pre>

<script>
  export default {
    data() {
      return {
        color: {
          '000': '#000000',
          '333': '#262A30',
          '666': '#5C626B',
          '999': '#959BA3',
          fff: '#ffffff',
          aaa: '#aaaaaa',
          ccc: '#cbcfd6',
          eee: '#eeeeee',
          f2: '#f2f2f2',
          f7: '#f7f8f9',
        
          // 主色
          main: '#ff4400',
        
          link: '#488ff9',
          success: '#2dc888',
          warning:' #ffa400',
          error: '#f53939'
        }
      } 
    },
    
    computed: {
      colorStyl() {
        // return `color = { ${Object.keys(this.color).map(k => `${k}: ${this.color[k]}`).join(',')} }`
        return `color = ${JSON.stringify(this.color, null, 2)}`
      }
    }
  }
</script>

透明色

```stylus
.bg-transparent
  background-color transparent
.bd-transparent  
  border-color transparent
```

例子

```html
<div class="bg-f7 c-666 bd-eee">
  ...
</div>
```
