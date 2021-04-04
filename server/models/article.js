import mongoose from 'mongoose'
import ArticleSchema from '../schemas/articles'

export default mongoose.model('Article', ArticleSchema)
