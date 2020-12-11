// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');
const router = express.Router();

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

router.post('/', async (req, res) => {
    try {
        const contents = req.body;
        const newResource = await Resource.createResource(contents);
        res.status(201).json(newResource);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
