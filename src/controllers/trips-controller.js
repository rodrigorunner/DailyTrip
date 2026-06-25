const tripsServices = require('../services/trips-services')

exports.findAllTrips = async (req, res) => {
    try {
       
        const trips = await tripsServices.findAllTrips()
    
        return res.status(200).json(trips)

    } catch (error) {
        return res.status(500).json({
            message: error.message,
            error: error.stack
        })   
    }
}

exports.findById = async (req, res) => {
    const { id } = req.params

    try {       
        
        const trip = await tripsServices.findById(id)
    
        return res.status(200).json(trip)

    } catch (error) {
         return res.status(500).json({
            message: error.message,
            error: error.stack
        })   
    }
}

exports.createTrip = async (req, res) => {
    try {

        const trip = await tripsServices.createTrip(req.body)
        
        return res.status(201).json(trip)

    } catch (error) {
         return res.status(error.statusCode ||500).json({
            message: error.message,
            error: error.stack
        })     
    } 
}

exports.updateTrip = async (req, res) => {
    const { id } = req.params 

    try {

        const trip = await tripsServices.updateTrip(req.body, id)
        
        return res.status(200).json({
            message: 'Trip updated successfully.'
        }) 

    } catch (error) {
         return res.status(500).json({
            message: error.message,
            error: error.stack
        })    
    }
}

exports.deleteTrip = async (req, res) => {
    const { id } = req.params

    try {
        const trip = await tripsServices.deleteTrip(newId)

        return res.status(200).json({
            message: 'Trip deleted succefully.'
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            error: error.stack
        })   
    }
}