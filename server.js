require('dotenv').config()
// const { exec } = require('child_process')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./api/router')

// exec('coffee firstDrink.coffee', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
// if (error) console.log(error)
// })

var x = 5
if (x == 5) {
	console.log("ok")
}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', router)
app.use('/', express.static(__dirname + '/build'))
app.listen(process.env.PORT)
console.log(`Listening on Port : 5000 💚`)
