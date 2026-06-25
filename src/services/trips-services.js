const tripsRepository = require('../repository/trips-repository')
const ExpressError = require('../utils/ExpressError')

exports.findAllTrips = async () => {
    const trips = await tripsRepository.findAllTrips()

    if(trips.length === 0) {
        throw new ExpressError('There is no trip available.', 404)
    }

    return trips
}

exports.findById = async (id) => {
    const trip = await tripsRepository.findById(id)

    if(trip === undefined) {
        throw new ExpressError('Trip not found.', 404)
    }

    return trip
}

exports.createTrip = async (tripData) => {
    const createdTrip = await tripsRepository.createTrip(tripData)
    
    return createdTrip
}

exports.updateTrip = async (tripData, id) => {
    const updatedTrip = await tripsRepository.updateTrip(tripData, id)

    if(updatedTrip === undefined) {
        throw new ExpressError('Trip not found.', 404)
    }

    return updatedTrip
}

exports.deleteTrip = async (id) => {
    const deletedTip = await tripsRepository.deleteTrip(id)

    if(deletedTip === undefined) {
        throw new ExpressError('Trip not found.', 404)
    }

    return deletedTip
}