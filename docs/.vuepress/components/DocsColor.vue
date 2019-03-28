<template>
  <div class="docs-color-group">
    <div
      v-for="item in Object.keys(color)"
      class="docs-color"
    >
      <div
        :style="{
          backgroundColor: color[item]
        }"
      />
      {{ color[item] }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DocsColor',

    props: {
      color: Object
    }
  }
</script>

<style lang="stylus">
.docs-color-group
  display flex
  flex-wrap wrap
.docs-color
  display flex
  justify-content center
  align-items center
  flex-direction column
  margin-bottom 20px
  div
    width 100px
    height 50px
</style>
