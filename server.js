const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongo = require('./app/mongodb')
const router = require('./app/routes')

// initialize dotenv
dotenv.config()

// set our port
const port = process.env.PORT || 3000

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// register routes
app.use(router)

// start mongo connection pool, then start express app
// mongo.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/automobile-test')
//     .then(() => app.listen(port))
//     .then(() => console.log(`Magic happens on port: ${port}`))
//     .catch((err) => {
//         console.error(err)
//         process.exit(1)
//     })

// mongo.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/automobile-test')
//     .then(() => console.log("Mongo is connected"))
//     .catch((err) => {
//         console.error(err)
//         process.exit(1)
//     })

// const server = app

mongo.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/automobile-test')
.then(() => { 
    const server = app.listen(port);
})
.then(() => console.log(`Magic happens on port: ${port}`))
.catch((err) => {
    console.error(err)
    process.exit(1)
})