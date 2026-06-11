const express = require('express')
const app = express()

const tripRoutes = require('./routes/index-routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(tripRoutes)

module.exports = app 