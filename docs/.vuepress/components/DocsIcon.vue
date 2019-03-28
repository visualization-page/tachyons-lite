<template>
  <div class="docs-icon-group">
    <icon
      v-for="item in icons"
      :name="item"
    />
  </div>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'DocsIcon',

  components: {
    Icon
  },

  data () {
    return {
      icons: [
        'gouwuche',
        'fenlei'
      ]
    }
  },

  mounted() {
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

<style lang="stylus">
  .docs-icon-group
    display flex
</style>
