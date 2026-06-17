const router = require('express').Router()

const tripsControllers = require('../controllers/trips-controller')
const catchAsync = require('../utils/catchAsync')

router.get('/', catchAsync(tripsControllers.findAllTrips))
router.get('/:id', catchAsync(tripsControllers.findById))
router.post('/', catchAsync(tripsControllers.createTrip))
router.put('/:id', catchAsync(tripsControllers.updateTrip))
router.delete('/:id', catchAsync(tripsControllers.deleteTrip))

module.exports = router 