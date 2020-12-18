// build your `Task` model here
const db = require('../../data/dbConfig');

// We need to be able to: GET all resources, POST a new resource.
module.exports = {
    getAllTasks() {
        return db('tasks');
    },
    addNewTask(task) {
        return db('tasks').insert(task)
            .then(([id]) => {
                return db('tasks').where('id', id);
            });   
    }
};
