const pool = require('../database/db')
const ExpressError = require('../utils/ExpressError')

exports.findAllTrips = async () => {
    const result = await pool.query(`
            SELECT 
                u.name,
                t.destination,
                t.travel_date,
                t.description
            FROM trips t
            INNER JOIN users u 
            ON t.user_id = u.user_id
            WHERE t.user_id = 2
        `)

     if(result.rows.length === 0) {
        const msg = 'There is no trip available.'
        throw new ExpressError(msg, 404)
    }

    return result.rows 
}

exports.findById = async (id) => {
    /**
     * Convertendo "id" de string para number porque o postgresql
     * armazena um inteiro.
     * O valor 10 como segundo parâmetro configura o id para ser um 
     * número de base decimal.
     */
    const newId = parseInt(id, 10)

    if(Number.isNaN(newId)) {
        const msg = 'Trip not found.'
        throw new ExpressError(msg, 404)
    }

    const result = await pool.query(`
            SELECT 
                destination, 
                description ,
                travel_date
            FROM trips 
            WHERE id = $1
        `, [id])
    
    if(result.rows.length === 0) {
        const msg = 'No trip found.'
        throw new ExpressError(msg, 404)
    }

    return result.rows[0]
}

exports.createTrip = async (tripData) => {
    const { 
        user_id, 
        destination, 
        travel_date, 
        description 
    } = tripData 

     if (
    !destination || 
    !description ||
    !travel_date || 
        !user_id 
    ) {
        const msg = 'All fields are required.'
        throw new ExpressError(msg, 400)
    }

    const result = await pool.query(`
        INSERT INTO trips(
                    user_id,
                    destination,
                    travel_date,
                    description)
        VALUES 
            ($1, $2, $3, $4)
        RETURNING *
        `, [
            user_id, 
            destination, 
            travel_date, 
            description
            ])

   return result.rows[0]
}

exports.updateTrip = async (tripData, id) => {
     /**
     * Convertendo "id" de string para number porque o postgresql
     * armazena um inteiro.
     * O valor 10 como segundo parâmetro configura o id para ser um 
     * número de base decimal.
     */
    const newId = parseInt(id, 10)

    if(Number.isNaN(newId)) {
        const msg = 'Invalid id.'
        throw new ExpressError(msg, 404)
    }
     const { 
        destination, 
        travel_date, 
        description 
    } = tripData 

    if (
    !destination ||
    !travel_date ||
    !description
    ) {
        const msg = 'All fields are required.'
        throw new ExpressError(msg, 400)
    }

    const result = await pool.query(`
            UPDATE trips
        SET 
            destination = $1,
            travel_date = $2,
            description = $3
        WHERE id = $4
        RETURNING *
        `, [
            destination,
            travel_date, 
            description, 
            id
        ])

    if(result.rows.length === 0) {
        const msg = 'Trip not found.'
        throw new ExpressError(msg, 400)
    }

    return result.rows[0]
}

exports.deleteTrip = async (id) => {
     /**
     * Convertendo "id" de string para number porque o postgresql
     * armazena um inteiro.
     * O valor 10 como segundo parâmetro configura o id para ser um 
     * número de base decimal.
     */
    const newId = parseInt(id, 10)

    if(Number.isNaN(newId)) {
        const msg = 'No trip found.'
        throw new ExpressError(msg, 404)
    }

    const result = await pool.query(`
            DELETE FROM trips
            WHERE id = $1 
            RETURNING *
        `, [id])

    if(result.rows.length === 0) {
        const msg = 'Trip not found.'
        throw new ExpressError(msg, 400)
    }
    
    return result.rows[0]
}