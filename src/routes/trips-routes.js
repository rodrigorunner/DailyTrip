/**
 * Quem me chamou ?
 * index-routes.js.
 * 
 * Quem eu chamo ?
 * Controller.
 * 
 * O roteamento define os endpoints da URL, ou seja,
 * é a definição do destino da requisição e por onde
 * o servidor envia a resposta.
 */

const router = require('express').Router()

const tripsControllers = require('../controllers/trips-controller')
const catchAsync = require('../utils/catchAsync')
const { tripsDailyValidation } = require('../middleware/trips-validaton')

router.get('/', catchAsync(tripsControllers.findAllTrips))

router.get('/:id', catchAsync(tripsControllers.findById))

router.post('/', 
        tripsDailyValidation,
        catchAsync(tripsControllers.createTrip))

router.put('/:id', 
        tripsDailyValidation, 
        catchAsync(tripsControllers.updateTrip))
        
router.delete('/:id', catchAsync(tripsControllers.deleteTrip))

module.exports = router 