const mongoose = require('mongoose')

let ArticleSchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        feature_img: String,
        claps: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)
exports = mongoose.model('Article', ArticleSchema)