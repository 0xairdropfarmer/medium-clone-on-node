/** */
const Article = require('./../models/Article')
const User = require('./../models/User')
const fs = require('fs')

module.exports = {
    
    addArticle: (req, res, next) => {

        let base64Data = null
        const _feature_img = req.body.feature_img
        _feature_img != null ? base64Data = _feature_img.replace(/^data:image\/png;base64,/, "") : null
        const _filename = `medium-clone-${Date.now()}.png`;

        let { text, title, claps, description } = req.body
        let obj = { text, title, claps, description, feature_img: _feature_img != null ? `/uploads/${_filename}` : '' }

        fs.writeFile(`./public/uploads/${_filename}`, base64Data, 'base64', function(err) {
            if(err)
                console.log(err)
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
        })
        /*new Article(obj).save((err, article) => {
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
        })*/

        /*var storage = multer.diskStorage({
            destination: function (req, file, callback) {
                callback(null, './uploads')
            },
            filename: function () {
                callback(null, )
            }
        })
        var upload = multer({
            storage: storage
        }).single('userFile')
        upload(req, res, function(err) {
        })*/
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