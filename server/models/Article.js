const mongoose = require('mongoose')

let ArticleSchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        description: String,
        feature_img: String,
        claps: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                text: String
            }
        ]
    }
)
module.exports = mongoose.model('Article', ArticleSchema)