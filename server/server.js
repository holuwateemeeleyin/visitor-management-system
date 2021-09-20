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

app.use('/api/visitor', visitor)
app.use('/api/admin', admin)





// const port = process.env.PORT || 3001;
// app.listen(port, ()=> {
//     console.log('Server is running now');
// })


// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }


// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));