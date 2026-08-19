const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: [true, "User already Exists with this Email"]
    },
    password: String
});

const userModel = mongoose.model("userDatabase", userSchema);

module.exports = userModel;