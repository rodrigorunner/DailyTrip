const express = require('express')
const app = express()

const tripRoutes = require('./routes/index-routes')
const errorHandler = require('./middleware/erro-handler')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(tripRoutes)
app.use(errorHandler)

module.exports = app 