const cat = require('cat-me');
const express = require('express');

const app = express(); // server created

app.listen(3000); // server started
console.log(cat());
