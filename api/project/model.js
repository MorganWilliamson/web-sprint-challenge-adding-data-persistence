// build your `Project` model here
const db = require('../../data/dbConfig');

/// DATA ACCESS METHODS ///
// We need to be able to: Add a new project (POST), fetch a list of all projects (GET).
module.exports = {
    getAllProjects() {
        return db('projects');
    },
    createProject(project) {
        return db('projects').insert(project)
            .then(([id]) => {
                return db('projects').where('id', id);
            });
    }
};
