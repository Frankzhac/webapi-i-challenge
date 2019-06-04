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
  const { name, bio, created_at, updated_at } = req.body;
  if (!name || !bio) {
    res.status(400).json({
      errorMessage: "Please provide name and bio for the user."
    });
  }
  // add/save new user in the db

  db.insert({
    name,
    bio,
    created_at,
    updated_at
  })
    .then(user => {
      res.status(201).json(res);
    })
    .catch(err => {
      // console.log(err);
      res.status(500).json({
        success: false,
        error: "There was an error while saving the user to the database"
      });
    });
});


server.get('/api/users', (req, res) => {
  db.find()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      // console.log(err);
      res.status(500).json({
        error: "The users information could not be retrieved."
      });
    });
});

server.get('/api/users/:id', (req, res) => {
  db.find()
})



server.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`)
});
