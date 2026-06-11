const pool = require('../database/db')

exports.findAllTrips = async () => {
     const query = `
            SELECT 
                u.name,
                t.destination,
                t.travel_date,
                t.description
            FROM trips t
            INNER JOIN users u 
            ON t.user_id = u.user_id
            WHERE t.user_id = 2
        `
    const result = await pool.query(query)

    return result.rows
}

exports.findById = async (id) => {
    const query = `SELECT 
                            destination, 
                            description ,
                            travel_date
                       FROM trips 
                       WHERE id = $1 `
    
    const result = await pool.query(query, [id])

    return result.rows
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
        const error = {
            message: 'All fields are required.'
        }

        return error
    }

     const query = `
        INSERT INTO trips(user_id,
                        destination,
                        travel_date,
                        description)
        VALUES 
            ($1, $2, $3, $4)
        RETURNING *
        `

        const values = [
            user_id, 
            destination, 
            travel_date, 
            description
        ]

        const result = await pool.query(query, values)

        return result.rows[0]
}

exports.updateTrip = async (tripDataBody, tripDataId) => {
    const { 
        destination, 
        travel_date, 
        description 
    } = tripDataBody 

    const { 
        id 
    } = tripDataId

      if (
    tripDataBody.destination === "" ||
    tripDataBody.description === "" ||
    tripDataBody.travel_date === ""
    ) {
        const error = {
            message: 'All fields are required.'
        }

        return error
    }

     const query = `
        UPDATE trips
        SET 
            destination = $1,
            travel_date = $2,
            description = $3
        WHERE id = $4
        RETURNING *
        `

        const values = [destination, travel_date, description, id]

        const result = await pool.query(query, values)

        return result.rows[0]
}

exports.deleteTrip = async (tripId) => {
    const {
        id
    } = tripId 

     const query = `DELETE FROM trips WHERE id = $1 RETURNING *`

    /**
     * Criar uma condição para perguntar ao usuário se
     * realmente ele deseja deletar a trip.
     */
    const result = await pool.query(query, [id])

    return result.rows
}