// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');
const router = express.Router();

/// MIDDLEWARE ///
const validatePost = (req, res, next) => {
    if(!req.body.name) {
        res.status(400).json({ message: "Please provide a valid resource name (128 characters max)." });
    } else {
        next();
    }
};

/// ENDPOINTS ///
// We need to be able to: GET all resources, POST a new resource. 
router.get('/', async (req, res) => {
    try {
        const resources = await Resource.getAllResources();
        if(!resources){
            res.status(404).json({ message: "Could not find requested resources." });
        } else {
            res.json(resources);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', validatePost, async (req, res) => {
    try {
        const newResource = await Resource.createResource(req.body);
        if (newResource) {
            res.status(201).json(newResource);
        } else {
            res.status(400).json({ message: "Provide a valid resource name (128 characters max)." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
