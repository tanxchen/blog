const mongoose = require('mongoose')
const { formatDate } = require('../utils')

const TagSchema = new mongoose.Schema({
  // 标签名称
  name: {
    type: String,
    required: true
  },
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

TagSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createDate = this.meta.updateDate = formatDate(Date.now(), 'yyyy-MM-dd hh:mm:ss')
  } else {
    this.meta.updateDate = formatDate(Date.now(), 'yyyy-MM-dd hh:mm:ss')
  }
  next()
})

TagSchema.statics.fetch = function (cb) {
  return this
    .find({})
    .sort({ 'meta.updateDate': -1 })
    .exec(cb)
}

TagSchema.statics.findById = function (id, cb) {
  return this
    .findOne({ _id: id })
    .exec(cb)
}

export default TagSchema
