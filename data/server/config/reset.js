import pool from './database.js';
import 'dotenv/config';
import characters from '../../characters.js';

async function createCharactersTable() {
    const createTableQuery = `
        DROP TABLE IF EXISTS characters;

        CREATE TABLE IF NOT EXISTS characters (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            gameSeries TEXT NOT NULL,
            powers TEXT NOT NULL,
            genre VARCHAR(255) NOT NULL,
            role VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            image VARCHAR(255) NOT NULL
        
        );
    
    
    `;

    try {
        await pool.query(createTableQuery);
        console.log('Characters table created successfully')

       for (const character of characters) {
    const insertQuery = `
        INSERT INTO characters
        (name, gameSeries, powers, genre, role, description, image)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;

    const values = [
        character.name,
        JSON.stringify(character.gameSeries),
        JSON.stringify(character.powers),
        character.genre,
        character.role,
        character.description,
        character.image
    ];

    await pool.query(insertQuery, values);
    console.log(`✅ ${character.name} added successfully`);
}

console.log('Characters seeded successfully');

} catch (err) {
    console.error('Error creating characters table', err);
}

}

createCharactersTable();