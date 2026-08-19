const express = require('express');
const userModel = require('./models/user.model');
const authRouter = require('./routes/auth.routes')
const cookieParser = require('cookie-parser')

const app = express();

app.use(express.json());
app.use('/api/auth', authRouter)
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("Hi I am Backend...")
})

userModel.create()
module.exports = app;