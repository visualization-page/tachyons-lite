# 安装

使用 xnpm 安装

```md
xnpm install tcon --save
```

一次性导入，在项目入口根页面例如 `main.js` 导入

```js
import 'tcon'
```

按需引入

```js
import 'tcon/dist/size.css'
import 'tcon/dist/button.css'
```

安装 [babel-plugin-tcon](https://github.com/visualization-page/babel-plugin-tcon)，简化写法

```js
import { size, button } from 'tcon'
```

