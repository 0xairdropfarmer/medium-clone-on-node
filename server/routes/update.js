const updatecontroller = require('./../controllers/update.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {

    /**
     * get all updates
     */
    router
        .route('/updates')
        .get(updatecontroller.getAll)

    /**
     * add an update
     */
    router
        .route('/update')
        .post(multipartWare, updatecontroller.addUpdate)

    /**
     * get a particlular update to view
     */
    router
        .route('/update/:id')
        .get(updatecontroller.getUpdate)
}