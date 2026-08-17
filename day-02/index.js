const express = require('express');

const app = express(); // server is created

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page...');
});

app.listen(3000) // server started

