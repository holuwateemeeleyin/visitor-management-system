const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('./../config/config').get(process.env.NODE_ENV);
const SALT_I = 10;

const visitorSchema = mongoose.Schema ({
    name:{
        type:String,
        required: true,
        trim:true
    },
    phone: {
        type: Number,
        required: true,
        trim:true,
        unique:1
    },
    email: {
        type: String,
        required: true,
<<<<<<< HEAD
=======
        unique:1,
>>>>>>> 66c00ee90a76a95026c064a4df4298f692f94ffe
        trim:true
    },
    purpose: {
        type:String,
        required:true,
        trim:true
    },
    visitorHost: {
        type: String,
        required:true,
        trim:true
    },
<<<<<<< HEAD
    checkIn:{
        type:Date,
        default: Date.now
    },
    checkout:{
        type: Date
    },
    status:{
        type: String,
        default:'In'
    },
=======
>>>>>>> 66c00ee90a76a95026c064a4df4298f692f94ffe
    token: {
        type:String
    }
}, {timestamps:true})

<<<<<<< HEAD
let timeStamp = Date.now
=======
>>>>>>> 66c00ee90a76a95026c064a4df4298f692f94ffe
// For generating token
visitorSchema.methods.generateToken = function (cb) {
    var visitor = this;
    var token = jwt.sign(visitor._id.toHexString(), config.SECRET);

    visitor.token = token;
    visitor.save(function(err, visitor){
        if(err) return cb(err)
        cb(null,visitor)
    })

}

// Find Visitor by token, inorder to delete or checkout
visitorSchema.statics.findByToken = function(token,cb){
    var visitor = this
    jwt.verify(token,config.SECRET,function(err, decode){
        // if everything gets decoded correctly, we want to grab the visitor id and find the visitor information
        //we will be finding the visitor by ID and by token
        visitor.findOne({"_id":decode, "token":token}, function(err,visitor){
            // if we get an error, we will return the cb with an error
            if(err) return cb(err)
            // if everything goes okay, it will return null as an error(no id is found) or actual visitor
            cb(null, visitor) //if the visitorid is incorrect, the visitor will be nothing, 
        })  
    })
}

// deleting token
visitorSchema.methods.deleteToken = function(token, cb){
    var visitor = this;
    visitor.update({$unset:{token:1}}, (err,visitor)=>{
        if(err) return cb(err);
        cb(null, visitor)
    })
}
const Visitor = mongoose.model('Visitor', visitorSchema)
module.exports = { Visitor }