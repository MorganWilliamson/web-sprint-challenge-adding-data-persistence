// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');
const router = express.Router();

/// ENDPOINTS ///
// We need to be able to: Add a new project (POST), fetch a list of all projects (GET).
router.get('/', async (req, res) => {
    try {
        const projects = await Project.getAllProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const contents = req.body;
        const newProject = await Project.createProject(contents);
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

module.exports = router;
