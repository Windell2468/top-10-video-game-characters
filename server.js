import express from 'express'; 
import characters from './data/characters.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: './public' });
});
app.get('/characters/mario', (req, res) => {
  const mario = characters[0];
  res.send(`
    <h1>${mario.name}</h1>
    <img src="${mario.image}" alt="${mario.name}" />
    <p><strong> Game Series:</strong> ${mario.gameSeries.join(', ')}</p>
    <p><strong> Powers:</strong> ${mario.powers.join(', ')}</p>
    <p><strong> Genre:</strong> ${mario.genre}</p>
    <p><strong> Role:</strong> ${mario.role}</p>
    <p><strong> Description:</strong> ${mario.description}</p>
    <a href="/">Back to Home</a>
    `)
})
app.get('/characters/link', (req, res) => {
  const link = characters[1];
  res.send(`
    <h1>${link.name}</h1>
    <img src="${link.image}" alt="${link.name}" />
    <p><strong> Game Series:</strong> ${link.gameSeries.join(', ')}</p>
    <p><strong> Powers:</strong> ${link.powers.join(', ')}</p>
    <p><strong> Genre:</strong> ${link.genre}</p>
    <p><strong> Role:</strong> ${link.role}</p>
    <p><strong> Description:</strong> ${link.description}</p>
    <a href="/">Back to Home</a>
  `)
})
app.get('/characters/joker', (req, res) => {
  const joker = characters[2];
  res.send(`
    <h1>${joker.name}</h1>
    <img src="${joker.image}" alt="${joker.name}" />
    <p><strong> Game Series:</strong> ${joker.gameSeries.join(', ')}</p>
    <p><strong> Powers:</strong> ${joker.powers.join(' , ')}</p>
    <p><strong> Genre:</strong> ${joker.genre}</p>
    <p><strong> Role: </strong> ${joker.role}</p>
    <p><strong> Description: </strong> ${joker.description}</p>
    <a href="/">Back to Home</a>
  `)
})
app.get('/characters/phoenix', (req, res) => {
  const phoenix = characters[3];
  res.send(`
    <h1>${phoenix.name}</h1>
    <img src="${phoenix.image}" alt="${phoenix.name}" />
    <p><strong> Game Series:</strong> ${phoenix.gameSeries.join(', ')}</p>
    <p><strong> Powers:</strong> ${phoenix.powers.join(' , ')}</p>
    <p><strong> Genre:</strong> ${phoenix.genre}</p>
    <p><strong> Role: </strong> ${phoenix.role}</p>
    <p><strong> Description: </strong> ${phoenix.description}</p>
    <a href="/">Back to Home</a>
  `)
})
app.get('/characters/jill', (req, res) => {
  const jill = characters[4];
  res.send(`
    <h1>${jill.name}</h1>
    <img src="${jill.image}" alt="${jill.name}" />
    <p><strong> Game Series:</strong> ${jill.gameSeries.join(', ')}</p>
    <p><strong> Powers:</strong> ${jill.powers.join(' , ')}</p>
    <p><strong> Genre:</strong> ${jill.genre}</p>
    <p><strong> Role: </strong> ${jill.role}</p>
    <p><strong> Description: </strong> ${jill.description}</p>
     <a href="/">Back to Home</a>
  `)
})
app.get('/characters/sora', (req, res) => {
  const sora = characters[5];
  res.send(`
    <h1>${sora.name}</h1>
    <img src="${sora.image}" alt="${sora.name}" />
    <p><strong> Game Series:</strong> ${sora.gameSeries.join(', ')}</p>
    <p><strong> Powers:</strong> ${sora.powers.join(' , ')}</p>
    <p><strong> Genre:</strong> ${sora.genre}</p>
    <p><strong> Role:</strong> ${sora.role}</p>
    <p><strong> Description:</strong> ${sora.description}</p>
    <a href="/">Back to Home</a>
  `)
} )
app.get('/characters/ike', (req, res) => {
  const ike = characters[6];
  res.send(`
    <h1>${ike.name}</h1>
    <img src="${ike.image}" alt="${ike.name}" />
    <p><strong> Game Series:</strong> ${ike.gameSeries.join(', ')}</p>
    <p><strong> Powers:</strong> ${ike.powers.join(' , ')}</p>
    <p><strong> Genre:</strong> ${ike.genre}</p>
    <p><strong> Role:</strong> ${ike.role}</p>
    <p><strong> Description:</strong> ${ike.description}</p>
    <a href="/">Back to Home</a>
  `)
})
app.get('/characters/lara', (req, res) => {
  const lara = characters[7];
  res.send(`
    <h1>${lara.name}</h1>
    <img src="${lara.image}" alt="${lara.name}" />
    <p><strong> Game Series:</strong> ${lara.gameSeries.join(', ')}</p>
    <p><strong> Powers:</strong> ${lara.powers.join(' , ')}</p>
    <p><strong> Genre:</strong> ${lara.genre}</p>
    <p><strong> Role:</strong> ${lara.role}</p>
    <p><strong> Description:</strong> ${lara.description}</p>
    <a href="/">Back to Home</a>
    `)
})
app.get('/characters/yuri', (req, res) => {
  const yuri = characters[8];
  res.send(`  
    <h1>${yuri.name}</h1>
    <img src="${yuri.image}" alt="${yuri.name}" />
    <p><strong> Game Series:</strong> ${yuri.gameSeries.join(', ')}</p> 
    <p><strong> Powers:</strong> ${yuri.powers.join(' , ')}</p>
    <p><strong> Genre:</strong> ${yuri.genre}</p>
    <p><strong> Role:</strong> ${yuri.role}</p>
    <p><strong> Description:</strong> ${yuri.description}</p>
    <a href="/">Back to Home</a>
  `)
})
app.get('/characters/sonic', (req, res) => {
  const sonic = characters[9];
  res.send(`
    <h1>${sonic.name}</h1>
    <img src="${sonic.image}" alt="${sonic.name}" />
    <p><strong> Game Series:</strong> ${sonic.gameSeries.join(', ')}</p>
    <p><strong> Powers:</strong> ${sonic.powers.join(' , ')}</p>
    <p><strong> Genre:</strong> ${sonic.genre}</p>
    <p><strong> Role:</strong> ${sonic.role}</p>
    <p><strong> Description:</strong> ${sonic.description}</p>
    <a href="/">Back to Home</a>
  `)
})

app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <a href="/">Back to Home</a>
  `);
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

