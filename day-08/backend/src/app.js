const express = require('express');
const app = express();
const noteModel = require('./models/note.model')
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hi, I am Backend...")
})

app.post('/notes', async (req, res) => {
    const {title, description} = req.body;

    const note = await noteModel.create({
        title,
        description
    })

    res.status(201).json({
        message: "Note created successfully...",
        note
    })
});

app.get('/notes', async (req, res) => {
    const notes = await noteModel.find();

    res.status(200).json({
        message: "Note fetched successfully...",
        notes
    })
})

module.exports = app;