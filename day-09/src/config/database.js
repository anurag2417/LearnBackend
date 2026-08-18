const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Successfully connected to Database...")
    })
}

module.exports = connectToDb;