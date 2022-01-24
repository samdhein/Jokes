// import all dependencies
const express = require("express");
const app = express();

// configure mongoose (set up in config and require). Should be able to see "established a connection to the database" in CL
require('./config/mongoose.config')

// configure express
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
console.log("server.js: before routes")
require("./routes/joke.routes")(app);

// listen to port 
app.listen( 8000, ()=> console.log('listening on port: 8000') )


// conclusion: 
// get server and config working... established a connection to the database
// then: controller, routes