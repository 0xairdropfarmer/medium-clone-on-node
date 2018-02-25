/** */
const Article = require('./../models/Article')

module.exports = {
    
    addArticle: (req, res) => {
        new Article(req.body).save()
        res.send('done')
    },
    getAll: (req, res) => {

    },
    clapArticle: (req, res) => {

    },
    commentArticle: (req, res) => {

    },
    getArticle: (req, res) => {

    }
}