// project_id (integer)(FK), resource_id (integer)(FK), both also set as PK's?

exports.seed = function(knex) {
    return knex('project_resources').insert([   
      { project_id: 1, resource_id: 2 }, 
      { project_id: 2, resource_id: 1 }, 
    ]);
  };
