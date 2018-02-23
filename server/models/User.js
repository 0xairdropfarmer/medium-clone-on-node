const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema(
    {
        name: String,
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
)
module.exports = mongoose.model('User', UserSchema)