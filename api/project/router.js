// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');
const router = express.Router();

/// MIDDLEWARE ///
const validatePost = (req, res, next) => {
    if(!req.body.name) {
        res.status(400).json({ message: "Please provide a valid project name (128 characters max)." });
    } else {
        next();
    }
};

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

router.post('/', validatePost, async (req, res) => {
    try {
        const newProject = await Project.createProject(req.body);
        if (newProject) {
            res.status(201).json(newProject); 
        } else {
            res.status(400).json({ message: "Error adding new project." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
