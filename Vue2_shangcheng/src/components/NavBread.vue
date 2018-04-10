<!--//-> 这里是面包屑 -->
<template>
  <div class="nav-breadcrumb-wrap">
    <div class="container">
      <nav class="nav-breadcrumb">
        <a href="/">Home</a>
        <!--<span>Goods</span>-->

        <!--//-> 面包屑要做成活的 -->
        <!--//-> slot是一个插槽，供其他页面放入内容 -->
        <slot name="bread"></slot>
        <slot name="thirdBread"></slot>
      </nav>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'NavBread',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

