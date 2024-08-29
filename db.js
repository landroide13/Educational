const mongoose = require('mongoose');

//DB
const dbName = 'School01';

//Mongoose Connection
mongoose.connect(`mongodb://localhost:27017/${dbName}`)
    .then(() => {
        console.log("Connection Open")
    })
    .catch(err => console.log(err))