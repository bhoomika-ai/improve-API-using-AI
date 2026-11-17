
const express = require('express');

const app = express();
const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// Array to store tasks
let tasks = [];

// POST /tasks - Add a new task
app.post('/tasks', (req, res) => {
    const { title, status, feedback } = req.body;

    if (!title || !status || !feedback) {
        return res.status(400).json({
            message: 'Title,status and feedback are required'
        });
    }

    const task = {
        title: title,
        status: status,
        feedback: feedback
    };

    tasks.push(task);

    res.status(201).json({
        message: 'Task added successfully',
        task: task
    });
});

// GET /tasks - View all tasks
app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});