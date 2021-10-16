const express = require('express')
const router = express.Router()
const example = require('./controller/ApiTest')

let x = 1;
(x === 1) && console.log(`value of x is ${x}`)

router.get('/hi/:name', example.ApiSet.welcome)

module.exports = router
