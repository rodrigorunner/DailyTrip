/**
 * Ambiente central de roteamento.
 * 
 * Quem me chamou ?
 * Requisição.
 * 
 * Quem eu chamou ?
 * tripsRoutes.
 */
const router = require('express').Router()
const tripsRoutes = require('./trips-routes')

/** Middleware de roteamento. */
router.use('/trips-daily', tripsRoutes)

module.exports = router