// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');
const router = express.Router();

/// ENDPOINTS ///
// We need to be able to: GET all resources, POST a new resource.
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.getAllResources();
        if(!tasks){
            res.status(404).json({ message: "Could not find requested tasks." });
        } else {
            res.json(tasks);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const contents = req.body;
        const newTask = await Task.createResource(contents);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
