<template>
  <div class="about-page">
    <bl-header></bl-header>
    <h4 class="h4">关于我</h4>
    <div>
      <p>
        我是Tanx Chen。目前在魔都任职前端开发。
        喜欢跟小伙伴讨论技术，学习技术，研究技术。
        喜爱前端，喜爱更友善的交互体验。
        喜欢折腾，动手能力强，热爱编程。
      </p>
    </div>
    <p></p>
    <hr class="hr-line">
    <h4 class="h4">关于本站</h4>
    <p><del>本站基于vue(nuxt) + node(express) + mongodb + nginx + 腾讯云 + jenkins构建。</del></p>
    <ul>
      <li>部署至 github:gh-pages 2021-04-05</li>
      <li><del>项目代码由gitee迁移至github私有仓库 2018-01-08</del></li>
      <li><del>站点https升级 2018-01-08</del></li>
      <li><del>添加了评论功能（gitalk） 2018-12-30</del></li>
    </ul>
    <hr class="hr-line">
    <h4 class="h4">我的项目</h4>
    <p>
      <a href="https://tanxchen.github.io/home/project.html" target="_blank" rel="noopener noreferrer" class="link">
      https://tanxchen.github.io/home/project.html
      </a>
    </p>
    <hr class="hr-line">
    <h4 class="h4">联系我</h4>
    <p style="display: flex;align-items: center;">
      <a href="https://github.com/tanxchen" target="_blank" class="github-logo">
        <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" 
        width="32" aria-hidden="true">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
          0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
          1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
          0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 
          1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 
          3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 
          8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>
      |
      <span style="margin-left: 20px;">
        <i class="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;: jsryanx#gmail.com
      </span>
    </p>
    <hr class="hr-line">
    <p class="create-wrap">
      发布于2018-12-28&nbsp;&nbsp;&nbsp;&nbsp;最新修改于2021-10-01
    </p>
    <div id="about-gitalk-container" class="blog-comments-wrap"></div>
  </div>
</template>

<script>
import BlHeader from '@/components/Header.vue'

export default {
  name: 'about',

  components: {
    BlHeader
  },

  data () {
    return {
    }
  },

  mounted () {
    document.title = '关于 | Tanx'
    // eslint-disable-next-line
    const gitalk = new Gitalk({
      clientID: '3cc18428738157f74e62',
      clientSecret: 'a0a0eb91a60115f5ee8ae31007590ac9d1163c6e',
      repo: 'blog-comments',
      owner: 'tanxchen',
      admin: ['tanxchen'],
      id: location.pathname,
      distractionFreeMode: false
    })

    gitalk.render('about-gitalk-container')
  },

  methods: {}
}
</script>

<style lang="stylus" scoped>
.about-page
  p
    line-height 1.6
  ul
    list-style initial
    padding 0 0 0 40px
  li
    margin 8px 0
    line-height 1.2
.h4
  font-weight 700
  font-size 120%
  margin-bottom 20px
  margin-top 20px
  & ~ p
    margin-bottom 14px

.hr-line
  margin 16px 0 10px
  opacity .3

.github-logo
  opacity .8
  display flex
  margin-right 20px
  &:hover
    opacity .6

.friend-block
  display inline-block

.create-wrap
  text-align right
  font-size 14px
  color #a1a1a1

</style>
