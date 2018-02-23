const user = require('./user')
const article = require('./article')

exports = (router) => {
    user(router)
    article(router)
}