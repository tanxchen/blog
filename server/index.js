import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import api from './api'

const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/blog')
mongoose.connection.on('error', function (error) {
  console.log('数据库连接失败：' + error)
})
mongoose.connection.once('open', function () {
  console.log('—— 数据库连接成功！ ——')
})
// const multer = require('multer')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// app.use(multer()) // for parsing multipart/form-data

app.use(express.static(path.join(__dirname, 'static-page')))

// Import API Routes
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

app.listen(3333, '0.0.0.0')
console.log('Server listening on ' + '0.0.0.0' + ':' + 3333) // eslint-disable-line no-console
// console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
