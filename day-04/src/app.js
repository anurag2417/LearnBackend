// iss file me hum server k create krte hai...

const express = require('express');
const app = express(); // server created
const notes = [];

// this will also express to read incoming json data
app.use(express.json());

// creating a resource
app.post('/notes', (req, res) => {
    res.send('note created')
    notes.push(req.body);
    console.log(notes);
})

// getting a resource
app.get('/notes', (req, res) => {
    res.send(notes)
})

// deleting a resource
// params
// : -> colon means the value after colon will be dynamic
app.delete('/notes/:index', (req, res) => {
    // console.log(req.params.index);
    delete notes[req.params.index];
    res.send('Note deleted successfully');
})

// update using patch
app.patch('/notes/:index', (req, res) => {
    console.log(req.body);
    notes[req.params.index].description = req.body.description;
    res.send('Note updated successfully.')
})

// replace using put
app.put('/notes/:index', (req, res) => {
    notes[req.params.index] = req.body;
    res.send('Note replaced successfully...');
});

module.exports = app;