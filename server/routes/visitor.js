const express = require('express')
const router = express.Router();

const { Visitor } = require('../models/visitor')


// POST for checking in or creating vistors
// router.post('/create', (req, res) => {
//     const visitor = new Visitor(req.body)
//     visitor.save((err, doc) => {
//         if (err) return res.json({success:false});
//         res.status(200).json({
//             success: true,
//             visitor: doc
//         })
//     })
// })

// Add Visitors
router.post('/create',(req, res)=> {
    const visitor = new Visitor(req.body)

    // Check if visitors has not checked in
    Visitor.findOne({email: visitor.email, status: "In"}, (err, foundVisitor) => {
        
        if(foundVisitor !== null){
            console.log("Visitor is already Checked in with the same email");
            res.send({error:"VISITORFOUND"})
            return;
        }
        visitor.save((err, doc) => {
            if (err) return res.json({success:false});
            res.status(200).json({
                success: true,
                visitor: doc
            })
        })
        
        
    })
})

// Get for getting visitors that checked in
router.get('/get-visitors', (req, res) => {
    Visitor.find({}, (err, visitors) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(visitors)
    })
})

// If Visitor is authenticated, get this
// router.get('/visitorAuth', visitorAuth, (req, res) => {
//     res.json({
//         isAuth: true,
//         id: req.visitor._id,
//         name: req.visitor.name,
//         email: req.visitor.email,
//         phone: req.visitor.phone,
//         purpose: req.visitor.purpose,
//         visitorHost: req.visitor.visitorHost
//     })
// })


// Confirming checking for visitors
// router.post('/checkin', (req, res) => {
//     Visitor.findOne({ 'email': req.body.email }, (err, visitor) => {
//         if (!visitor) return res.json({
//             isAuth: false,
//             message: 'email has not checked in'
//         });
//         // pass the method 'generateToken' here
//         visitor.generateToken((err, visitor) => {
//             if (err) return res.status(400).send(err);
//             res.cookie('visitorAuth', visitor.token).json({
//                 isAuth: true,
//                 id: visitor._id,
//                 name: visitor.name,
//                 phoneNo: visitor.phone,
//                 email: visitor.email,
//                 purpose: visitor.purpose,
//                 visitorHost: visitor.visitorHost

//             })
//         })
//     })
// })

// visitors checkout (not working yet)
// router.get('/api/checkout', visitorAuth, (req, res) => {
//     req.visitor.deleteToken(req.token, (err, user) => {
//         if (err) return res.status(400).send(err)
//         res.sendStatus(200)
//     })
// })

// 

// To checkout visitors

router.put ('/checkout', (req, res)=> {
    const visitorMail = req.body.email     //come back here for error timmmy

    // Check if any guest with this email and status is checked is inside
    Visitor.findOne({email: visitorMail, status:"In"}, (err, visitor)=> {
        if (err) { 
            console.error(err)
            res.send({ error: err})
            return;
        }

        // If no visitor is found 
        if (visitor == null) {
            console.log("This visitor has not been checked in")
            res.send({error: "NOVISITORFOUND"})
            return;
        }
        // If the visitor is found
        else{
            visitor.checkout = Date.now()
            visitor.status = "Out"
            visitor.save ((err,doc)=> {
                if (err) {
                    console.error(err);
                    res.send({ success: false})
                    return;
                }
                else {
                    res.status(200).json ({
                        success: true,
                        checkout: Date.now,
                        status:"Out"
                    })
                }
            })
        }
    } )
})

module.exports = router