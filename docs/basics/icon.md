# 图标

图标模块使用 iconfont ，内置可使用的列表如下

<icon 
  v-for="item in icons"
  :name="item"
/>

<script>
export default {
  data () {
    return {
      icons: [
        'icon-gouwuche',
        'icon-fenlei'
      ]
    }
  },
  
  created() {
    // 导入 iconfont
    if (Array.from(document.head.childNodes).every(item => item.id !== 'docs-icon')) {
      const link = document.createElement('link')
      link.href = '//at.alicdn.com/t/font_473974_xr5a57n88s.css'
      link.rel = 'stylesheet'
      link.id = 'docs-icon'
      document.head.appendChild(link)
    }
  }
}
</script>  
