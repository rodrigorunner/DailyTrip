const pool = require('../database/db')
const tripsServices = require('../services/trips-services')

exports.findAllTrips = async (req, res) => {
    try {
       
        const trips = await tripsServices.findAllTrips()
    
        if(trips.length === 0) {
            return res.json({
                message: 'There is no trips.'
            })
        }
    
        return res.status(200).json(trips)
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })   
    }
}

exports.findById = async (req, res) => {
    const { id } = req.params 

    try {       
        
        const trip = await tripsServices.findById(id)

        if(trip.length === 0) {
            return res.status(404).json({
                message: 'Trip not found.'
            })
        }
    
        return res.status(200).json(trip)
    } catch (error) {
         return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })   
    }
}

exports.createTrip = async (req, res) => {
    try {
        const trip = await tripsServices.createTrip(req.body)

        return res.status(201).json(trip)
    } catch (error) {
         return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })     
    } 
}

exports.updateTrip = async (req, res) => {
    try {

        const trip = await tripsServices.updateTrip(req.body, req.params)
      
        //  if(trip === 0) {
        //     return res.status(404).json({
        //         message: 'Trip not found.'
        //     })
        // }

        return res.status(200).json({
            message: 'Trip updated successfully.'
        }) 
    } catch (error) {
         return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })    
    }
}

exports.deleteTrip = async (req, res) => {
    try {
        const trip = tripsServices.deleteTrip(req.params)

        console.log(trip)

        if(trip === 0) {
            return res.status(404).json({
                message: 'Trip not found.'
            })
        }

        return res.status(200).json({
            message: 'Trip deleted succefully.'
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })   
    }
}