<template>
  <div class="docs-icon">
    <i class="iconfont" :class="'icon-' + name" />
    <span>{{ 'icon-' + name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Icon',

  props: {
    name: String
  }
}
</script>

<style lang="stylus">
.docs-icon
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 80px
  height 80px
  border 1px #eee solid
  i
    font-size 24px
  span
    font-size 12px
    white-space nowrap
    /*word-break break-all*/
</style>
