const JokeController = require("../controllers/joke.controller")

module.exports = app => {
    console.log("server/routes")
    app.get("/", JokeController.index)
    app.get("/api/jokes", JokeController.allJokes)  // get all jokes
    app.post("/api/jokes", JokeController.createJoke) // create a joke
    app.get("/api/jokes/:id", JokeController.oneJoke) // get one joke (:keyname must match req.params.keyname in controller)
    app.put("/api/jokes/:id", JokeController.updateJoke) // update one joke
    app.delete("/api/jokes/:id", JokeController.deleteJoke) // delete one joke
}