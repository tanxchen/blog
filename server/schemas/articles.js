const mongoose = require('mongoose')
const { formatDate } = require('../utils')

const ArticleSchema = new mongoose.Schema({
  // 文章标题
  title: String,
  // 文章标签
	tags: {
    type: Array,
    default: []
  }, 
  // 文章内容
	content: String,
	meta: {
		createDate: {
      type: String,
      default: formatDate(Date.now(), 'yyyy-MM-dd hh:mm:ss')
		},
		updateDate: {
      type: String,
      default: formatDate(Date.now(), 'yyyy-MM-dd hh:mm:ss')
		}
	}
})

ArticleSchema.pre('save', function(next) {
	if (this.isNew) {
    this.meta.createDate = this.meta.updateDate = formatDate(Date.now(), 'yyyy-MM-dd hh:mm:ss')
	} else {
    this.meta.updateDate = formatDate(Date.now(), 'yyyy-MM-dd hh:mm:ss')
	}
	next()
})

ArticleSchema.statics.fetch = function(cb) {
  return this
    .find({})
    .sort({'meta.updateDate': -1})
    .exec(cb)
}

ArticleSchema.statics.findById = function(id, cb) {
  return this
    .findOne({_id: id})
    .exec(cb)
}

export default ArticleSchema
