// build your `Resource` model here
const db = require('../../data/dbConfig');

// We need to be able to: GET all resources, POST a new resource. 
module.exports = {
    getAllResources() {
        return db('resources');
    },
    addResource(resource) {
        return db('resources').insert(resource)
            .then(([id]) => {
                return db('resources').where('id', id);
            });       
    }
};
