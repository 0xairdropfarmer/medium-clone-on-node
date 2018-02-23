const usercontroller = require('./../controllers/user.ctrl')

module.exports = (router) => {

    /**
     * get a user
     */
    router
        .route('/user/:id')
        .get(usercontroller.getUser)

    /**
     * adds a user
     */
    router
        .route('/user')
        .post(usercontroller.addUser)

    /**
     * follow a user
     */
    router
        .route('/user/follow')
        .post(usercontroller.followUser)
}