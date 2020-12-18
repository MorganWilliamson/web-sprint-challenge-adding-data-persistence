// id (integer), name (text), description (text), completed (boolean)

exports.seed = function(knex) {
    return knex('projects').insert([   
      { id: 1, name: "Project 1", description: "The first project." },
      { id: 2, name: "Project 2", description: "The second project.", completed: true }
    ]);
  };
  