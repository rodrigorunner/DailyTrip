const pool = require('../src/database/db')

const migrate = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS trips(
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(user_id),
            destination VARCHAR(255) NOT NULL,
            travel_date DATE,
            description VARCHAR(255) NOT NULL
        );
    `

    await pool.query(query)
    console.log('Table trips created successfully.')

    process.exit()
}

migrate()