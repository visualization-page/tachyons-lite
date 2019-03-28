# 安装

使用 npm or yarn 安装

```md
npm install tcon --save
yarn add tcon
```

一次性导入，在项目入口根页面例如 `App.vue` 导入

```stylus
@import '~tcon'
```

按需引入

```stylus
@import '~tcon/dist/size.css'
@import '~tcon/dist/button.css'
```

引入源文件，自定义生成，[源码](https://github.com/visualization-page/tcon/blob/77388775b6cb62e8ac8c39db1fc0c1e5bc62d490/src/size/index.styl#L40)参考。
```stylus
@import '~tcon/src/size/index.styl'

margin-size = 1 2 3 4
// 生成 css
gen('margin') 
```
