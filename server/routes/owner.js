const ownercontroller = require('./../controllers/owner.ctrl')

module.exports = (router) => {

    /**
     * get a user
     */
    router
        .route('/owner/:id')
        .get(ownercontroller.getOwner)

    /**
     * get an owner profile
    
    router
        .route('/user/profile/:id')
        .get(usercontroller.getUserProfile)

    /**
     * adds an anthor
     */
    router
        .route('/owner')
        .post(ownercontroller.addOwner)

    /**
     * follow a user
    
    router
        .route('/user/follow')
        .post(usercontroller.followUser)
     */
}