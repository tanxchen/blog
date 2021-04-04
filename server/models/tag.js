import mongoose from 'mongoose'
import TagSchema from '../schemas/tags'

export default mongoose.model('Tag', TagSchema)
