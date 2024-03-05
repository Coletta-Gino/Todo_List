const express = require('express');
const router = express.Router();
const db = require('./db');

// Create a new todo
router.post('/todos', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const sql = 'INSERT INTO todos (title) VALUES (?)';
  db.query(sql, [title], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const newTodoId = results.insertId;
    return res.status(201).json({ id: newTodoId, title, completed: false });
  });
});

// Get all todos
router.get('/todos', (req, res) => {
  const sql = 'SELECT * FROM todos';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.status(200).json(results);
  });
});

// Update a todo by ID
router.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const sql = 'UPDATE todos SET title = ? WHERE id = ?';
  db.query(sql, [title, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.status(200).json({ id: parseInt(id), title, completed: false });
  });
});

// Delete a todo by ID
router.delete('/todos/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM todos WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.status(204).send(); // No content on successful deletion
  });
});

module.exports = router;