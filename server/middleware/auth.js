const {Admin} = require('../models/admin')

let auth = (req,res,next) => {
    let token = req.cookies.auth

    // Check if the token is correct
    Admin.findByToken(token,(err,admin)=> {
        if(err) throw err
        // if there is no admin at all. That is,if no admin is login
        if(!admin) return res.json({
            error:true
        })
        req.token =token
        req.admin = admin
        next();
    })

}

module.exports = { auth }