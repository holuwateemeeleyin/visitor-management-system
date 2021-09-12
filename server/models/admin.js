const mongoose = require ('mongoose')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
const SALT_I = 10;
const config = require('./../config/config').get(process.env.NODE_ENV);

const adminSchema = mongoose.Schema ({
<<<<<<< HEAD
    adminId : {
=======
    username : {
>>>>>>> 66c00ee90a76a95026c064a4df4298f692f94ffe
        type: String,
        required: true,
        unique: 1,
        trim:true
    },
    password: {
        type:String,
        required:true,
        trim:true
    },
    name: {
        type: String,
        required:true,
    },
    token: {
        type: String
    }

})

<<<<<<< HEAD
adminSchema.pre('save', function(next){
    var admin = this;
    
    if(admin.isModified('password')){
        bcrypt.genSalt(SALT_I, function(err, salt){
            if(err) return next(err);

            bcrypt.hash(admin.password,salt,function(err,hash){
                if(err) return next(err);
                admin.password = hash;
                next();
            })
        })
    } else {
        next()
    }
})
// Compare the password entered and the stored hash password
adminSchema.methods.comparePassword = function(adminPassword,cb){
    bcrypt.compare(adminPassword, this.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    })
}


// Generate token when entered the right password
adminSchema.methods.generateToken = function(cb){
    var admin = this;
    var token = jwt.sign(admin._id.toHexString(), config.SECRET);
    // store the token inside the admin
    admin.token = token;
    admin.save(function (err, admin) {
        if(err) return cb(err)
        // if its not an error send null and the admin
        cb(null, admin)
    })
}

// creating a method that will be checking the token
adminSchema.statics.findByToken = function (token, cb){
    var admin = this;
    // since we are getting the token from the browser
    // the token contains the admin._id and the hash
    // if we decode the token, we will get the admin._id

    // the verify returns the adminId if the token is correct
    jwt.verify(token,config.SECRET, function(err, decode){
        // if everything gets decoded correctly, we want to grab the admin id
        //we will be finding the admin by ID and by token
        admin.findOne({"_id":decode, "token":token}, function(err, admin){
            if(err) return cb(err)
            // if everything goes okay, it will return null as an error and the actual admin
            cb(null, admin)
        })
    })
}

// deleting the token

adminSchema.methods.deleteToken = function(token,cb){
    var admin = this;

    admin.update({$unset:{token:1}}, (err, admin)=>{
        if(err) return cb(err)
        cb(null, admin)
    })
}


=======
>>>>>>> 66c00ee90a76a95026c064a4df4298f692f94ffe
const Admin = mongoose.model('Admin', adminSchema)

module.exports = { Admin }
