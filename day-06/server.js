// iss file ka kaam tha server ko start krna

// iss file ke ek aur kaam hai --- ***database ko connect krna***

const app = require('./src/app');
const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect('mongodb+srv://anuragakn18_db_user:1234567890@cluster0.darwqxo.mongodb.net/day-06')
        .then(() => {
            console.log('Connected to Database successfully...');
        })
}

connectToDb();

app.listen(3000, () => {
    console.log('Server is running at port 3000...');
});