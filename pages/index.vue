<template>
  <section class="container">
    <bl-header></bl-header>
    <div class="post" v-for="(article, index) in articles" :key="index">
      <h1 class="post-title">
        <nuxt-link :to="{ path: `/article/${article._id}` }">
          {{ article.title }}
        </nuxt-link>
      </h1>
      <div class="post-meta">{{ article.meta.createDate }}</div>
      <div class="post-content mdcontent desc" v-html="article.content"></div>
      <p class="readmore">
        <nuxt-link :to="{ path: `/article/${article._id}` }">阅读全文</nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
// import axios from '~/plugins/axios'
import markdown from '~/plugins/markdown'
import BlHeader from '~/components/Header.vue'
import articlesData from '~/data/articles.json'

export default {
  async asyncData () {
    // let { data } = await axios.get('/api/articles')
    let data = articlesData
    if (Array.isArray(data)) {
      data.forEach(article => {
        article.content && (article.content = markdown.render(article.content))
      })
    }
    return { articles: data }
  },

  components: {
    BlHeader
  },

  mounted () {
    if (document.title !== 'RyanxChen\'blog') {
      document.title = 'RyanxChen\'blog'
    }
  }
}
</script>

<style lang="stylus" scoped>
.desc
  height 64px
  box-sizing border-box
  display -webkit-box
  -webkit-line-clamp 2
  -webkit-box-orient vertical
  overflow hidden;
  /deep/ *
    margin: 0 !important;
    line-height: 24px !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    padding: 0 !important;
    border: 0 !important;

</style>
