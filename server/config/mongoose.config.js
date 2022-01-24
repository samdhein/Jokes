const mongoose = require('mongoose')

// boilerplate mongoose config from platform. update name_db. convention: lowercase, undesrcore, hyphen ok

mongoose.connect('mongodb://localhost/joke_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
