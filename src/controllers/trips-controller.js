const pool = require('../database/db')

exports.findAllTrips = async (req, res) => {
    try {
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
    
        if(result.rows.length === 0) {
            return res.json({
                message: 'There is no trips.'
            })
        }
    
        return res.status(200).json(result.rows)
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
        const query = `SELECT 
                            destination, 
                            description ,
                            travel_date
                       FROM trips 
                       WHERE id = $1 `
    
        const result = await pool.query(query, [id])
    
        if(result.rows.length === 0) {
            return res.status(404).json({
                message: 'Trip not found.'
            })
        }
    
        return res.status(200).json(result.rows[0])
    } catch (error) {
         return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })   
    }
}

exports.createTrip = async (req, res) => {
    const { user_id, destination, travel_date, description } = req.body 

    if (
    !destination ||
    !description ||
    !travel_date ||
        !user_id
    ) {
        return res.status(400).json({
            message: 'Missing some fields'
        })
    }

    try {
        const query = `
        INSERT INTO trips(user_id,
                        destination,
                        travel_date,
                        description)
        VALUES 
            ($1, $2, $3, $4)
        RETURNING *
        `

        const values = [user_id, destination, travel_date, description]
        await pool.query(query, values)

        return res.status(201).json({
            message: 'Trip create successfully.'
    })
    } catch (error) {
         return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })     
    } 
}

exports.updateTrip = async (req, res) => {
    const { destination, travel_date, description } = req.body 
    const { id } = req.params 

    try {
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

         if(result.rows.length === 0) {
            return res.status(404).json({
                message: 'Trip not found.'
            })
        }

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
    const { id } = req.params 

    try {
        const query = `DELETE FROM trips WHERE id = $1 RETURNING *`

        /**
         * Criar uma condição para perguntar ao usuário se
         * realmente ele deseja deletar a trip.
         */
        const result = await pool.query(query, [id])

        if(result.rows.length === 0) {
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