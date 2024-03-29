const path = require('path')
const dotenv =require ('dotenv')
dotenv.config({path: path.resolve(__dirname, './.env')})
const express = require('express');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())


// Seting database
mongoose.Promise = global.Promise

mongoose.connect (
    process.env.MONGODB_STRING,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }
)
.then(() => console.log("MongoDB has been connected"))
.catch((err) => console.log(err));


const visitor = require('./routes/visitor')
const admin = require('./routes/admin')


app.use(cookieParser())

// app.use(express.static(path.resolve(__dirname, "../client/build")))

app.use('/api/visitor', visitor)
app.use('/api/admin', admin)



if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, "../client/build")))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));