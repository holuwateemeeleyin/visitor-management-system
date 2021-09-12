const express = require ('express')
const router = express.Router();

const {Admin} = require('./../models/admin')
<<<<<<< HEAD
const {auth} = require('./../middleware/auth')
=======
>>>>>>> 66c00ee90a76a95026c064a4df4298f692f94ffe

// POST for Registering Admin
router.post ('/register', (req,res)=> {
    const admin = new Admin(req.body)
    admin.save((err, doc)=> {
        if(err) return res.status(400).send(err)
        res.status(200).json ({
            post:true,
<<<<<<< HEAD
            adminID:doc._id
=======
            admin:doc
>>>>>>> 66c00ee90a76a95026c064a4df4298f692f94ffe
        })
    })
})


// Get all admins
router.get('/admins', (req, res)=> {
    Admin.find({}, (err, admins)=> {
        if(err) return res.status(400).send(err);
        res.status(200).send(admins)
    })
})

<<<<<<< HEAD
router.post('/login', (req,res)=> {
    Admin.findOne({'adminId': req.body.adminId},(err, admin)=>{
        if(!admin) return res.json ({isAuth:false, message: 'Auth failed. AdminId not found'})
        
        admin.comparePassword(req.body.password,(err, isMatch)=>{
            if(!isMatch) return res.json({
                isAuth: false,
                message:'Wrong Password'
            })

            // this will recieve two argument, the error and the actual admin we are passing
            admin.generateToken((err, admin)=>{
                if(err) return res.status(400).send(err);
                // After generating the token, we need to send the respnse to the browser
                // and we need to store the token as a cookie
                res.cookie('auth', admin.token).json({
                    isAuth:true,
                    id:admin._id,
                    adminId:admin.adminId,
                    name:admin.name
                })
            })
        })
    })
})

router.get('/logout',auth,(req, res)=> {
    req.admin.deleteToken(req.token, (err, admin)=>{
        if(err) return res.send(400).send(err)
        res.sendStatus(200)
    })
})

router.get('/auth', auth, (req, res)=>{
    res.json({
        isAuth:true,
        id: req.admin._id,
        adminId: req.admin.adminId,
        name: req.admin.name
    })
})


=======
>>>>>>> 66c00ee90a76a95026c064a4df4298f692f94ffe
module.exports = router