const mongoose = require('mongoose')



const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    author: {
        type: Object,
        _id: mongoose.Types.ObjectId,
        username: String
    }
    
})


module.exports = mongoose.model('Post', postSchema)