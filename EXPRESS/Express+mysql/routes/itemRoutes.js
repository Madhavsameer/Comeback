const express = require('express');
const router = express.Router();
const db = require('../models/db');

// GET all items
router.get('/', (req, res) => {
  db.query('SELECT * FROM items', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// POST a new item
router.post('/', (req, res) => {
  const { name } = req.body;
  db.query('INSERT INTO items (name) VALUES (?)', [name], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json({ id: result.insertId, name });
  });
});

module.exports = router;
