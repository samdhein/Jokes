const mongoose = require('mongoose')

// create a schema
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required : [true, "Content is required"],  // validations
        minlength: [5, "Setup must be at least 5 characters"]
    },
    punchline: {
        type: String,   // can also be number!
        minlength: [5, "Punchline must be at least 5 characters"] // validations
    }
}, {timestamps: true})

const Joke = mongoose.model('Joke', JokeSchema)

// export
module.exports = Joke