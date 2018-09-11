const mongoose = require('mongoose')

let ArticleSchema = new mongoose.Schema(
    {
        _id: Number,
        title: String,
        url: String,
        year: Number,
        citations: Number,
        url_pdf: String,
        url_citations: String,
        type: String,
        text: String,        
        repo: {
            type: Number,
            ref: 'Repo'
        },
        // comments: [
        //     {
        //         author: {
        //             type: mongoose.Schema.Types.ObjectId,
        //             ref: 'User'
        //         },
        //         text: String
        //     }
        // ]
    }
);
// ArticleSchema.methods.clap = function() {
//     this.claps++
//     return this.save()
// }
// ArticleSchema.methods.comment = function(c) {
//     this.comments.push(c)
//     return this.save()
// }
ArticleSchema.methods.addRepo = function (repo_id) {
    this.repo = repo_id
    return this.save()
}
ArticleSchema.methods.getRepoArticle = function (_id) {
    Article.find({'repo': _id}).then((article) => {
        return article
    })
}
module.exports = mongoose.model('Article', ArticleSchema, 'article')