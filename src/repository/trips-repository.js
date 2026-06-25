const pool = require('../database/db')

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
            WHERE t.user_id = 1
        `)

    return result.rows 
}

exports.findById = async (id) => {

    const result = await pool.query(`
        SELECT 
            destination, 
            description ,
            travel_date
        FROM trips 
        WHERE id = $1
    `, [id])

    return result.rows[0]
}

exports.createTrip = async (tripData) => {
    
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
            tripData.user_id, 
            tripData.destination, 
            tripData.travel_date, 
            tripData.description
            ])
    console.log(result)
   return result.rows[0]
}

exports.updateTrip = async (tripData, id) => {

    const result = await pool.query(`
            UPDATE trips
        SET 
            destination = $1,
            travel_date = $2,
            description = $3
        WHERE id = $4
        RETURNING *
        `, [
            tripData.destination,
            tripData.travel_date, 
            tripData.description, 
            id
        ])

    return result.rows[0]
}

exports.deleteTrip = async (id) => {
    const result = await pool.query(`
            DELETE FROM trips
            WHERE id = $1 
            RETURNING *
        `, [id])
    
    return result.rows[0]
}