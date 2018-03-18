const mongoose = require('mongoose')
const ArticleSchema = new mongoose.Schema({
	title: String, // 文章标题
	label: String, // 文章标签
	content: String, // 文章内容
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
})

ArticleSchema.pre('save', function(next) {
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now()
	} else {
		this.meta.updateAt = Date.now()
	}
	next()
})
ArticleSchema.statics = {
	fetch: function(cb) {
		return this
			.find({})
			.sort({'meta.updateAt': -1})
			.exec(cb)
	},
	findById: function(id, cb) {
		return this
			.findOne({_id: id})
			.exec(cb)
	}
}

module.exports = ArticleSchema