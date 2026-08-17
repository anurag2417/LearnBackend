// iss file ka kaam tha server ko create krna
// aur server ko config krna

const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server created and initiated successfully...');
});

module.exports = app;