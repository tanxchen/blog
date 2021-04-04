<template>
  <section class="container">
    <bl-header></bl-header>
    <div class="post">
      <h1 class="post-title title">
        {{ article.title }}
      </h1>
      <div class="post-meta">{{ article.meta.createDate }}</div>
      <div class="article-mdcontent post-content mdcontent" v-html="article.content"></div>
      <!-- comments: gitalk -->
      <div id="article-gitalk-container" class="blog-comments-wrap"></div>
    </div>
  </section>
</template>

<script>
// import axios from '~/plugins/axios'
import markdown from '~/plugins/markdown'
import BlHeader from '~/components/Header.vue'
import articlesData from '~/data/articles.json'

const getArticleById = (id) => {
  return new Promise((resolve, reject) => {
    const res = articlesData.filter(item => item._id === id)
    if (res[0]) {
      resolve(res[0])
    } else {
      reject(new Error('article not found'))
    }
  })
}

export default {
  asyncData ({ params, error }) {
    // return axios.get('/api/article/' + params.id)
    return getArticleById(params.id)
      .then((res) => {
        // res.data.content = markdown.render(res.data.content)
        // return { article: res.data }
        res.content = markdown.render(res.content)
        return { article: res }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'article not found' })
      })
  },
  components: {
    BlHeader
  },

  mounted () {
    document.title = this.article.title ? `${this.article.title} | Ryanx` : document.title
    // eslint-disable-next-line
    const gitalk = new Gitalk({
      clientID: '3cc18428738157f74e62',
      clientSecret: 'a0a0eb91a60115f5ee8ae31007590ac9d1163c6e',
      repo: 'blog-comments',
      owner: 'ryanschen',
      admin: ['ryanschen'],
      id: location.pathname,
      distractionFreeMode: false
    })
    gitalk.render('article-gitalk-container')
  }
}
</script>

<style lang="stylus" scoped>
.title
  color #333

</style>
