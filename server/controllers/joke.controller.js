const Joke = require("../models/joke.model")

module.exports.index = (req, res) => {
    res.json("Hello")
}

// find all jokes
module.exports.allJokes = (req, res) => {
    Joke.find()
        .then(allJokes=>{
            console.log("Got the data" + allJokes)
            res.json({items: allJokes}
                )})
        .catch(err=>res.json({message: "Something went wrong.", error: err}))
}

// create joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => res.json({result: newJoke}))
    .catch(err=>res.json({message: "Something went wrong.", error: err}))
}

// find one joke
module.exports.oneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then(joke => res.json({joke: joke}))
    .catch(err=>res.json({message: "Something went wrong.", error: err}))
}

// update joke
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},  // need id
        req.body, // need body
        { new: true, runValidators: true }  // necessary in order to apply validations to update
        )
    .then(joke => res.json({joke: joke}))
    .catch(err=>res.json({message: "Something went wrong.", error: err}))
}

// delete joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({result: result}))
    .catch(err=>res.json({message: "Something went wrong.", error: err}))
}