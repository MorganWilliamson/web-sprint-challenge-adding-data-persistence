// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');
const router = express.Router();

/// MIDDLEWARE ///
const validatePost = (req, res, next) => {
    if(!req.body.description) {
        res.status(400).json({ message: "Please provide a valid task description (1000 characters max)." });
    } else if(!req.body.project_id) {
        res.status(400).json({ message: "Please provide a valid project ID." });
    }   else {
        next();
    }
};

/// ENDPOINTS ///
// We need to be able to: GET all tasks, POST a new tasks.
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.getAllTasks();
        if(!tasks){
            res.status(404).json({ message: "Could not find requested tasks." });
        } else {
            res.json(tasks);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', validatePost, async (req, res) => {
    try {
        const newTask = await Task.addNewTask(req.body);
        if (newTask) {
            res.status(201).json(newTask);
        } else {
            res.status(400).json({ message: "Provide a valid task description (1000 characters max)." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
