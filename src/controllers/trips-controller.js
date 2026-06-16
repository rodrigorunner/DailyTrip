const tripsServices = require('../services/trips-services')

exports.findAllTrips = async (req, res) => {
    try {
       
        const trips = await tripsServices.findAllTrips()
    
        if(trips.length === 0) {
            return res.status(200).json([])
        }
    
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

    /**
     * O valor 10 é "radix", ou seja,
     * ele é responsável por dizer que estamos
     * usando base decimal 10.
     */
    const newId = parseInt(id, 10)

    if(Number.isNaN(newId)) {
    return res.status(400).json({
        message: 'Invalid trip id.'
        })
    }

    try {       
        
        const trip = await tripsServices.findById(newId)

        if(!trip) {
            return res.status(404).json({
                message: 'Trip not found.'
            })
        }
    
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

    const newId = parseInt(id)

    if(isNaN(newId)) {
        return res.status(400).json({
            message: 'Invalid trip id.'
        })
    }
    try {

        const trip = await tripsServices.updateTrip(req.body, newId)

        if (!trip) {
        return res.status(404).json({
            message: 'Trip not found.'
        })
}
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

    const newId = parseInt(id)

    if(isNaN(newId)) {
        return res.status(400).json({
            message: 'Invalid trip id.'
        })
    }

    try {
        const trip = await tripsServices.deleteTrip(newId)

        if(!trip) {
            return res.status(404).json({
                message: 'Trip not found.'
            })
        }

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