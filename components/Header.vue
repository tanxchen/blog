<template>
  <div class="bl-header">
    <div class="site-name">
      <NuxtLink to="/">
        <img src="~assets/img/logo_200_200.png" alt="logo" style="width:40px;height:40px;border-radius:5px;">
      </NuxtLink>
      <p class="description">Stay Hungry. Stay Foolish.</p>
    </div>
    <div class="nav-menu">
      <NuxtLink to="/" class="current">
        <i class="fa fa-home"> 首页</i>
      </NuxtLink>
      <!-- <nuxt-link to="/archives">
        <i class="fa fa-archive"> 归档</i>
      </nuxt-link> -->
      <!-- <nuxt-link to="/friends">
        <i class="fa fa-archive"> 友链</i>
      </nuxt-link> -->
      <NuxtLink to="/about">
        <i class="fa fa-user"> 关于</i>
      </NuxtLink>
      <!-- <nuxt-link to="/atom.xml">
        <i class="fa fa-rss"> 订阅</i>
      </nuxt-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'bl-header',

  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang="stylus">
.bl-header
  padding 20px 0 0
  text-align left
  border-bottom 1px solid #ddd
  position relative
  margin-bottom 25px

.site-name
  margin-bottom 40px

.description
  margin .2em 0 0
  color #999

.nav-menu
  margin 10px 0 -1px
  padding 0
  position absolute
  right 0
  bottom 0
  a
    display inline-block
    padding 3px 20px 3px
    line-height 30px
    color #444
    font-size 13px
    border 1px solid transparent
    &.nuxt-link-exact-active
      border 1px solid #ddd
      border-bottom-color #fff

</style>
