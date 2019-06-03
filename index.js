// implement your API here
const express = require('express');
const db = require('./data/db')

const server = express();
server.use(express.json());

const port = 4000;

server.get('/', (req, res) => {
  res.send('Hello Word');
});

// Endpoint starts below

server.post('/api/users', (req, res) => {
  const body = req.body;
  const { name } = req.body;
  if (!name) {
    res.status(400).json({
      errorMessage: "Please provide name and bio for the user."
    });
  }
  // add/save new user in the db
  db.add(body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        error: "The users information could not be retrieved."
      })
    })
})

server.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`)
});
