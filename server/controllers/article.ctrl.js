/** */
const Article = require('./../models/Article')
const User = require('./../models/User')

module.exports = {
    
    addArticle: (req, res, next) => {
        let { text, title, claps, description, feature_img } = req.body
        let obj = { text, title, claps, description, feature_img }
        new Article(obj).save((err, article) => {
            if (err)
                res.send(err)
            else if (!article)
                res.send(400)
            else {
                return article.addAuthor(req.body.author_id).then((_article) => {
                    return res.send(_article)
                })
            }
            next()
        })
    },
    getAll: (req, res, next) => {
        Article.find(req.params.id)
        .populate('author')
        .populate('comments.author').exec((err, article)=> {
            if (err)
                res.send(err)
            else if (!article)
                res.send(404)
            else
                res.send(article)
            next()            
        })
    },

    /**
     * article_id
     */
    clapArticle: (req, res, next) => {
        Article.findById(req.body.article_id).then((article)=> {
            return article.clap().then(()=>{
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },

    /**
     * comment, author_id, article_id
     */
    commentArticle: (req, res, next) => {
        Article.findById(req.body.article_id).then((article)=> {
            return article.comment({
                author: req.body.author_id,
                text: req.body.comment
            }).then(() => {
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },

    /**
     * article_id
     */
    getArticle: (req, res, next) => {
        Article.findById(req.params.id)
        .populate('author')
        .populate('comments.author').exec((err, article)=> {
            if (err)
                res.send(err)
            else if (!article)
                res.send(404)
            else
                res.send(article)
            next()            
        })
    }
}