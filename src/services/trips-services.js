const pool = require('../database/db')
const tripsRepository = require('../repository/trips-repository')


exports.findAllTrips = async () => {
    const trips = await tripsRepository.findAllTrips()

    return trips
}

exports.findById = async (id) => {
   const trip = await tripsRepository.findById(id)

   return trip
}

exports.createTrip = async (tripData) => {
    const createdTrip = await tripsRepository.createTrip(tripData)
    
    return createdTrip
}

exports.updateTrip = async (tripData, id) => {
    const updatedTrip = await tripsRepository.updateTrip(tripData, id)

    return updatedTrip
}

exports.deleteTrip = async (id) => {
   const deletedTip = await tripsRepository.deleteTrip(id)

    return deletedTip
}