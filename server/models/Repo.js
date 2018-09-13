const mongoose = require('mongoose')

let RepoSchema = new mongoose.Schema(
    {
        _id: Number,
        text: String,
        title: String,
        description: String,
        feature_img: String,
        claps: Number,
        owner: {
            type: Number,
            ref: 'Owner'
        },
        articles: [
            {
                type: Number,
                ref: 'Article'
                // type: String
            }
        ],
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
RepoSchema.methods.clap = function() {
    this.claps++
    return this.save()
}
RepoSchema.methods.delArticle = function(article_id) {
    this.articles.pull(article_id)
    return this.save()
}
RepoSchema.methods.addArticle = function(article_id) {
    this.articles.push(article_id)
    return this.save()
}
// RepoSchema.methods.comment = function(c) {
//     this.comments.push(c)
//     return this.save()
// }
// RepoSchema.methods.addOwner = function (owner_id) {
//     this.owner = owner_id
//     return this.save()
// }
RepoSchema.methods.getOwnerRepo = function (_id) {
    Repo.find({'owner': _id}).then((repo) => {
        return repo
    })
}
module.exports = mongoose.model('Repo', RepoSchema, 'repo')