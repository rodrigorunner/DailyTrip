const pool = require('../src/database/db')

const migrate = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users(
            user_id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            create_at TIMESTAMP DEFAULT NOW()
        );
    `

    await pool.query(query)
    console.log('Table created successfully.')

    process.exit()
}

migrate()