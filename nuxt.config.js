export default {
  components: true,
  /*
  ** Headers of the page
  */
  head: {
    title: 'RyanxChen\'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui,viewport-fit=cover' },
      { name: 'keywords', content: 'ryanx chen blog' },
      { hid: 'description', name: 'description', content: 'Ryanx Chen\'s blog 编程&前端&记录总结个人成长' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/main.css',
    '@/assets/css/markdown.css',
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', 'prismjs', 'markdown-it'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~/plugins/ga.js', ssr: false }
  ],
  generate: {
    dir: 'docs', // gh_pages/ instead of dist/
    subFolders: false // HTML files are generated according to the route path
  },
  target: 'static',
  router: {
    base: '/blog/'
  }
}
