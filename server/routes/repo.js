const repocontroller = require('./../controllers/repo.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {

    /**
     * get all articles
     */
    router
        .route('/repos')
        .get(repocontroller.getAll)

    /**
     * add an article
     */
    router
        .route('/repo')
        .post(multipartWare, repocontroller.addRepo)

    /**
     * clap on an repo
     */
    router
        .route('/repo/clap')
        .post(repocontroller.clapRepo)

    /**
     * comment on an repo
     */
    // router
    //     .route('/repo/comment')
    //     .post(repocontroller.commentRepo)

    /**
     * get a particlular repo to view
     */
    router
        .route('/repo/:id')
        .get(repocontroller.getRepo)
}