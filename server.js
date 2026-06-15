// Import Express and character data
import express from 'express'; 
import 'dotenv/config';
import pool from './data/server/config/database.js';

// Create Express application
const app = express();
const PORT = process.env.PORT || 3000;
// Serve static files such as images and CSS
app.use(express.static('public'))

// Homepage route
app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: './public' });
});

app.get('/characters', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM characters');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving characters');
  }
});
app.get('/characters/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM characters WHERE id = $1', [req.params.id]);
    const character = result.rows[0];

    if (!character) {
      return res.status(404).send('Character not found');
    }

    res.send(`
      <h1>${character.name}</h1>
      <img src="${character.image}" alt="${character.name}" />
      <p><strong> Game Series:</strong> ${character.gameseries}</p>
      <p><strong> Powers:</strong> ${character.powers}</p>
      <p><strong> Genre:</strong> ${character.genre}</p>
      <p><strong> Role:</strong> ${character.role}</p>
       <p><strong> Description:</strong> ${character.description}</p>
      <br>
      <a href="/">Back to Home</a>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving character');
  }
});
// Custom 404 page for invalid routes
app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <a href="/">Back to Home</a>
  `);
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

