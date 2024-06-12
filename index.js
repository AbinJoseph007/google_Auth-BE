require('dotenv').config()

const express = require('express')

const cors = require('cors')

const router = require('./Router/router')

const passport = require('passport')

const cokkie = require('cookie-session')
const cookieSession = require('cookie-session')

require('./DB/connection')

const rlserver = express()

rlserver.use(cookieSession({
    name:"session",
    keys:["cyberwolve"],
    maxAge: 24*60*60*100
}))

rlserver.use(passport.initialize())
rlserver.use(passport.session())

rlserver.use(cors())

rlserver.use(express.json())

rlserver.use(router)

const PORT = 4000 || process.env

rlserver.listen(PORT,()=>{
    console.log('server running successfully');
})

rlserver.get('/',(req,res)=>{
    res.send(`<h1 style="color:red">project fair server runnig successfully and ready to accept requests for client</h1>`)
  })
  

