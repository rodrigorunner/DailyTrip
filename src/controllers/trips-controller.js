/**
 * Quem me chamou ?
 * Router.
 * 
 * Quem eu chamo ?
 * Services.
 * 
 * Controllers é responsável por receber a requisição do roteamento e
 * chamar services para lidar com a regra de negócio.
 */

const tripsServices = require('../services/trips-services')

exports.findAllTrips = async (req, res) => {     
    const trips = await tripsServices.findAllTrips()

    return res.status(200).json(trips)
}

exports.findById = async (req, res) => {
    const { id } = req.params     
        
    const trip = await tripsServices.findById(id)

    return res.status(200).json(trip)
}

exports.createTrip = async (req, res, next) => {
    const trip = await tripsServices.createTrip(req.body)

    console.log('Controller: ', trip)
        
    return res.status(201).json(trip)
}

exports.updateTrip = async (req, res) => {
    const { id } = req.params 

    await tripsServices.updateTrip(req.body, id)
    
    return res.status(200).json({
        message: 'Trip updated successfully.'
    }) 
}

exports.deleteTrip = async (req, res) => {
    const { id } = req.params

    await tripsServices.deleteTrip(id)

    return res.status(200).json({
        message: 'Trip deleted succefully.'
    })   
}