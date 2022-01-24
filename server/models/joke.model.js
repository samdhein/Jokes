const mongoose = require('mongoose')

// create a schema
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,   // (Number)
        required : [true, "Content is required"],  // validations
        minlength: [5, "Setup must be at least 5 characters"] // validations
    },
    punchline: {
        type: String, 
        required : [true, "Content is required"],  // validations
        minlength: [5, "Punchline must be at least 5 characters"] // validations
    }
}, {timestamps: true})

// export
const Joke = mongoose.model('Joke', JokeSchema)
module.exports = Joke