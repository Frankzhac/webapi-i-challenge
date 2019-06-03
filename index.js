// implement your API here
const express = require('express');
const db = require('./data/db')

const server = express();
server.use(express.json());

const port = 4000;

server.get('/', (req, res) => {
  res.send('Hello Word');
});


server.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`)
});
