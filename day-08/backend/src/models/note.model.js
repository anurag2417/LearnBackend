const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    description: String
})

const noteModel = mongoose.model("notes-day-08", noteSchema)
module.exports = noteModel;