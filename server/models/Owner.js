const mongoose = require('mongoose')

let OwnerSchema = new mongoose.Schema(
    {
        _id: Number,
        name: String,
        provider: String,
        type: String
    }
)

module.exports = mongoose.model('Owner', OwnerSchema, 'owner')