const mongoose = require('mongooose')

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
exports = mongoose.model('User', UserSchema)