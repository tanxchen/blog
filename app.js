const express = require('express')
const path = require('path')
const port = process.env.PORT || 80
const app = express()
const mongoose = require('mongoose')
const _ = require('underscore')
const Article = require('./models/article')
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/blog', {useMongoClient: true})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({limit: '1mb'}))
app.use('/static', serveStatic('public'))
app.locals.moment = require('moment')


//設置視圖的根目錄
app.set('views', './views/pages')
//設置默認的模板引擎
app.set('view engine', 'jade')
//監聽上設端口
app.listen(port, '0.0.0.0', () => {
	console.log(`server start at ${port} port.`)
})

//以下是路由
//index page
app.get('/', (req, res) => {
	Article.fetch((err, articles) => {
		if (err) {
			console.log(err)
		}
		res.render('index',{
			articles: articles
		})
	})
})

//admin update article
app.get('/admin/update/:id', (req, res) => {
	const id = req.params.id
	if (id) {
		Article.findById(id, (err, article) => {
			res.render('admin', {
				article: article
			})
		})
	}
})

//admin post article
app.post('/admin/article/new', (req, res) => {
    console.log(req.body)
    const id = req.body.article._id
    const articleObj = req.body.article
		let _article
		if (articleObj.content) {
			var REG_BODY = /<body[^>]*>([\s\S]*)<\/body>/;

			function getBody(content){
					var result = REG_BODY.exec(content);
					if(result && result.length === 2)
							return result[1];
					return content;
			}
			articleObj.content = getBody(articleObj.content)
		}
		console.log(articleObj.content);
    if (id !== 'undefined') {
			Article.findById(id, (err, article) => {
				if (err){
					console.log(err)
				}
				_article = _.extend(article, articleObj)
				_article.save((err, article) => {
					if (err) {
						console.log(err)
					}
					res.redirect('/article/' + article._id)
				})
			})
    } else {
			_article = new Article({
				title: articleObj.title,
				label: articleObj.label,
				content: articleObj.content
			})
			_article.save((err, article) => {
				if (err) {
					console.log(err)
				}
				res.redirect('/article/' + article._id)
			})
    }
})

//list page
app.get('/admin/list', (req, res) => {
	Article.fetch((err, articles) => {
		if (err) {
			console.log(err)
		}
		res.render('list', {
			articles: articles
		})
	})
})



//detail page
app.get('/article/:id', (req, res) => {
	const id = req.params.id
	Article.findById(id, (err, article) => {
		res.render('detail', {
			article: article
		})
	})
})

//admin page
app.get('/admin/article', (req, res) => {
	res.render('admin', {
		article: {
			title: '',
			label: '',
			content: ''
		}
	})
})


//list delete
app.delete('/admin/list', (req, res) => {
	const id = req.query.id
	if (id) {
		Article.remove({_id: id}, (err, article) => {
			if (err) {
				console.log(err)
			} else {
				res.json({success: 1})
			}
		})
	}
})

app.get('*', (req, res) => {
	res.render('404')
})