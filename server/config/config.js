// const mongoose = require('mongoose');
// const config = require('config');
// const db = config

// const connectDB = async () => {
// 	try {
// 		await mongoose.connect(db, {
// 			useNewUrlParser: true,
// 			useCreateIndex: true,
// 			useFindAndModify: false,
// 			useUnifiedTopology: true
// 		});

// 		console.log('MongoDB Connected...');
// 	} catch (err) {
// 		console.error(err.message);
// 		// Exit process with failure
// 		process.exit(1);
// 	}
// };

// module.exports = connectDB;




// // require('dotenv').config()
// // // const mongoose = require('mongoose')

// // // const connectDB = async() => {
// // //     try {
// // //         await mongoose.connect(process.env.MONGODB_URI, {
// // //             useNewUrlParser:true,
// // //             useUnifiedTopology: true
// // //         });
// // //         console.log('Connection is active on MongoDB');
// // //     } catch (error){
// // //         console.error('Connection failed on MongoDB');
// // //         process.exit(1);
// // //     }
// // // }

// // // module.exports = connectDB


// // const config = {
// //     production: {
// //         // Storing secret password inside heroku instead of github
// //         SECRET: process.env.SECRET,
// //         DATABASE: process.env.MONGODB_URI
// //     },
// //     // default: {
// //     //     SECRET: 'holuwateemeeleyin24',
// //     //     DATABASE: 'mongodb+srv://holuwateemeeleyin:samcity24@cluster0.pj7gg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/visitorManagementSystem'
// //     //     // DATABASE: 'mongodb://localhost:27017/visitorsManagmentSystem'
// //     // }
// // }
// // exports.get = function get(env){
// //     // IF we are in production return the first one
// //     return config[env] || config.default
// // }