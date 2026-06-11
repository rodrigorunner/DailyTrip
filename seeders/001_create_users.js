const pool = require('../src/database/db')

const migrate = async () => {
    const query = `
        INSERT INTO users(name, email, password) 
        VALUES 
               ('Larissa', 'larissasmith@yahoo.au', 'sdjkalf@3#jh'), 
               ('Alicie', 'alicieketlin@uol.ca', 'lj#$dsajlf@')
    `

    await pool.query(query)
    console.log('Table created successfully.')

    process.exit()
}

migrate()