const express = require('express');
const mongoose = require('mongoose');
// const db = "mongodb://suvarna:suvarna17@ds143932.mlab.com:43932/eventsdb";
const db = "mongodb://suvarna:suvarna17@ds143932.mlab.com:43932/eventsdb"
const jwt = require('jsonwebtoken')
const router = express.Router();
const User = require('../models/user')

mongoose.connect(db, function (err) {
    if (err) {
        console.log("db error" + err);

    }
    else {
        console.log("db connected");
    }
})
router.get('/', (req, res) =>

    // console.log("api server")
    res.send('api server')
)
function verifyToken(req, res, next) {
    if (!req.header.authorization) {
        return res.status(401).send("unauthorize request");
    }
    let token = req.header.authorization.split(" ")[1]
    if (token === 'null') {
        return res.status(401).send("unathorized request")
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send("unathorized request")
    }

    req.userId = payload.subject

    next();

}

router.post('/register', (req, res) => {
    let userData = req.body
    console.log(userData);
    let user = new User(userData)
    user.save((error, registerUser) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log(registerUser);
            let payload = { subject: registerUser._id }
            let token = jwt.sign(payload, "secretkey");
            res.status(200).send({ token })
        }
    })

});


router.post('/login', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log("failed to login");
        }
        else {
            if (!user) {
                res.status(401).send("INVALID Email")
            }
            else if (user.password !== userData.password) {
                res.status(401).send("Invalid Password")
            }
            else {
                let payload = { subject: user._id }
                let token = jwt.sign(payload, "secretkey");

                res.status(200).send({ token })
            }
        }

    })

});



router.get('/events', (req, res) => {
    let events = [

        {
            "_id": "1",
            "name": "shdfsj",
            "description": "hsfsdjfhj",
            "date": "12/2/2016"
        },
        {
            "_id": "2",
            "name": "shdfsj",
            "description": "hsfsdjfhj",
            "date": "12/2/2016"
        },
        {
            "_id": "3",
            "name": "shdfsj",
            "description": "hsfsdjfhj",
            "date": "12/2/2016"
        },
        {
            "_id": "4",
            "name": "shdfsj",
            "description": "hsfsdjfhj",
            "date": "12/2/2016"
        },
        {
            "_id": "5",
            "name": "shdfsj",
            "description": "hsfsdjfhj",
            "date": "12/2/2016"
        },
        {
            "_id": "6",
            "name": "shdfsj",
            "description": "hsfsdjfhj",
            "date": "12/2/2016"
        }
    ]
    res.json(events);

})


router.get('/special', verifyToken, (req, res) => {
    let events = [

        {
            "_id": "1",
            "name": "shdfsj",
            "description": "hsfsdjfhj",
            "date": "12/2/2016"
        },
        {
            "_id": "2",
            "name": "shdfsj",
            "description": "hsfsdjfhj",
            "date": "12/2/2016"
        },
        {
            "_id": "3",
            "name": "shdfsj",
            "description": "hsfsdjfhj",
            "date": "12/2/2016"
        },
        {
            "_id": "4",
            "name": "shdfsj",
            "description": "hsfsdjfhj",
            "date": "12/2/2016"
        },
        {
            "_id": "5",
            "name": "shdfsj",
            "description": "hsfsdjfhj",
            "date": "12/2/2016"
        },
        {
            "_id": "6",
            "name": "shdfsj",
            "description": "hsfsdjfhj",
            "date": "12/2/2016"
        }
    ]
    res.json(events);
})

module.exports = router