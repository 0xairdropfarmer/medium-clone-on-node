/** */
const User = require('./../models/User')

module.exports = {
    addUser: (req, res) => {

    },
    getUser: (req, res) => {
        res.send(req.params.id)
    },
    followUser: (req, res) => {
        res.send(req.body.user)
    }
}