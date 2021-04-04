import { Router } from 'express'
import articles from './articles'
import tags from './tags'
import login from './login'

const router = Router()

router.use(articles)
router.use(tags)
router.use(login)
router.get('*', (req, res) => {
  res.sendStatus(404)
})

export default router
