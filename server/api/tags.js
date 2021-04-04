import { Router } from 'express'
import Tag from '../models/tag'
import { formatDate } from '../utils'

const router = Router()

router.get('/tags', function (req, res, next) {
  Tag.fetch((err, tags) => {
    if (err) return res.sendStatus(500)

    res.json(tags)
  })
})

router.get('/tag/:id', function (req, res, next) {
  const id = req.params.id
  if (!id) return res.json({ errorMessage: ['参数id不存在'] })

  Tag.findById(id, (err, tag) => {
    if (!tag) return res.sendStatus(404)

    res.json(tag)
  })
})

router.post('/addTag', (req, res) => {
  new Tag({ name: req.body.name })
    .save((err, tag) => {
      if (err) return res.sendStatus(500)

      Tag.fetch((err, tags) => {
        if (err) return res.sendStatus(500)

        res.json(tags)
      })
    })
})

router.post('/removeTagById', (req, res) => {
  Tag.findByIdAndRemove(req.body.id, (err, response) => {
    if (err) return res.sendStatus(500)

    Tag.fetch((err, tags) => {
      if (err) return res.sendStatus(500)

      res.json(tags)
    })
  })
})

router.post('/updateTagById', (req, res) => {
  const id = req.body.id
  if (!id) return res.json({ errorMessage: ['参数id不存在'] })

  Tag.findById(id, (err, tag) => {
    if (err) return res.sendStatus(404)

    tag.name = req.body.name

    tag.save((err, newTag) => {
      if (err) return res.sendStatus(500)

      Tag.fetch((err, tags) => {
        if (err) return res.sendStatus(500)

        res.json(tags)
      })
    })
  })
})

export default router
