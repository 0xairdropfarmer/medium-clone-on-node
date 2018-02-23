const articlecontroller = require('./controllers/article.ctrl')

exports = (router) => {
    router.get('/articles',articlecontroller.getAll)
}