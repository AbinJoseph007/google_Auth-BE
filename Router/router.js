const express = require('express')

const usercontroller = require('../Controller/usercontroller')

const jwtMiddleware = require('../Middleware/JwtMiddleware')

const router = new express.Router()

//register

router.post('/user/register',usercontroller.register)

router.post('/user/login',usercontroller.login)

module.exports = router