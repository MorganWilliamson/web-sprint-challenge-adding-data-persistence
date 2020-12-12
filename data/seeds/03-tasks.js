// id (integer), description (text), notes (text), completed (boolean), project_id (integer)(FK)

exports.seed = function(knex) {
    return knex('tasks').insert([   
      { id: 1, 
        description: "Review the minutes from the previous meeting.", 
        notes: "Maria - good job on the notes from the last meeting, please pair with David for today's meeting.", 
        completed: true,
        project_id: 1
    },

    { id: 2, 
        description: "Discuss methods for implementation of Gatsby.", 
        notes: "David mentioned having previous experience with Gatsy, will lead presentation.", 
        completed: false,
        project_id: 1
    },
    ]);
  };