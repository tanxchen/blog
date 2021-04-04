import { Router } from 'express'
import Article from '../models/article'

const router = Router()

router.get('/articles', function (req, res, next) {
  Article.fetch((err, articles) => {
		if (err) return res.sendStatus(500)
    
    res.json(articles)
	})
})

router.get('/article/:id', function (req, res, next) {
  const id = req.params.id
  if (!id) return res.json({ errorMessage: ['api:/article/:id，参数id不存在'] })

  Article.findById(id, (err, article) => {
    if (!article) return res.sendStatus(404)

    res.json(article)
  })
})

router.post('/addArticle', (req, res) => {
  new Article({
    title: req.body.title,
    tags: req.body.tags,
    content: req.body.content
  })
    .save(err => {
      if (err) return res.sendStatus(500)

      res.json({success: 100})
    })
})

router.post('/editArticle', (req, res) => {
  const id = req.body.id
  if (!id) return res.json({ errorMessage: ['/api/editArticle:参数id不存在'] })

  Article.findById(id, (err, article) => {
    if (err) return res.sendStatus(404)

    article.title = req.body.title
    article.tags = req.body.tags
    article.content = req.body.content

    article.save(err => {
      if (err) return res.sendStatus(500)

      res.json({ success: 100 })
    })
  })
})

router.post('/removeArticleById', (req, res) => {
  const id = req.body.id
  if (!id) return res.json({ errorMessage: ['/api/removeArticleById:参数id不存在'] })

  Article.findByIdAndRemove(id, (err, response) => {
    if (err) return res.sendStatus(500)

    Article.fetch((err, articles) => {
      if (err) return res.sendStatus(500)

      res.json(articles)
    })
  })
})

export default router
