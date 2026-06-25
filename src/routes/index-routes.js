const router = require('express').Router()

const tripsRoutes = require('./trips-routes')

router.use('/trips-daily', tripsRoutes)

module.exports = router