import { Router } from 'express'

const router = Router()

router.post('/login', (req, res) => {
  if (req.body.userName === 'blog-admin' && req.body.password === '1234') {
    res.json({ success: 100 })
  } else {
    res.json({ success: 999 })
  }
})

export default router
