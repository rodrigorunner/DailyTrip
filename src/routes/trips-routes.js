const router = require('express').Router()

const tripsControllers = require('../controllers/trips-controller')

router.get('/', tripsControllers.findAllTrips)
router.get('/:id', tripsControllers.findById)
router.post('/', tripsControllers.createTrip)
router.put('/:id', tripsControllers.updateTrip)
router.delete('/:id', tripsControllers.deleteTrip)

module.exports = router 