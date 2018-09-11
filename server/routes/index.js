const user = require('./user')
const owner = require('./owner')
const article = require('./article')
const repo = require('./repo')
const update = require('./update')

module.exports = (router) => {
    user(router)
    owner(router)
    article(router)
    repo(router)
    update(router)
}