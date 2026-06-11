const pool = require('../src/database/db')

const migrate = async () => {
    const query = `
        INSERT INTO trips(
                        user_id,
                        destination,
                        travel_date,
                        description)
        VALUES
            (1, 'Rio de Janeiro', '2025-01-15', 'Viagem de férias'),
            (1, 'São Paulo', '2025-02-10', 'Evento de tecnologia'),
            (1, 'Rio de Janeiro', '2025-03-20', 'Final de semana'),
            (1, 'Belo Horizonte', '2025-04-05', 'Visita familiar'),
            (1, 'São Paulo', '2025-05-18', 'Reunião profissional'),
            (1, 'Salvador', '2025-06-10', 'Turismo'),
            (1, 'Rio de Janeiro', '2025-07-22', 'Passeio turístico'),
            (1, 'Vitória', '2025-08-14', 'Viagem rápida'),

            (2, 'São Paulo', '2025-01-22', 'Treinamento'),
            (2, 'Rio de Janeiro', '2025-02-14', 'Férias'),
            (2, 'São Paulo', '2025-03-08', 'Evento corporativo'),
            (2, 'Rio de Janeiro', '2025-04-27', 'Visita a amigos'),
            (2, 'Brasília', '2025-05-12', 'Viagem de trabalho'),
            (2, 'Salvador', '2025-06-25', 'Turismo'),
            (2, 'São Paulo', '2025-07-19', 'Feira de negócios'),
            (2, 'Rio de Janeiro', '2025-08-09', 'Passeio cultural'),
            (2, 'Curitiba', '2025-09-15', 'Evento acadêmico'),
            (2, 'São Paulo', '2025-10-21', 'Reunião'),
            (2, 'Rio de Janeiro', '2025-11-05', 'Viagem curta'),
            (2, 'Salvador', '2025-12-12', 'Férias de verão');
    `

    await pool.query(query)
    console.log('Trips created successfully.')

    process.exit()
}
migrate()