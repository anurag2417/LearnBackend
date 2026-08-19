require('dotenv').config();
const app = require('./src/app');
const connectToDb = require('./src/config/database');


connectToDb();

app.listen(8000, () => {
    console.log("Server is running at the prot 8000...");
})

