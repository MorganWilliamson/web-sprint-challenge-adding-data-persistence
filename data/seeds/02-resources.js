// id (integer), name (text), description (text)

exports.seed = function(knex) {
    return knex('resources').insert([   
      { id: 1, name: "Stapler", description: "A red Swingline stapler, half-full. There is not another box of staples within sight." },
      { id: 2, name: "Pen", description: "A Bic ballpoint pen; black ink." }
    ]);
  };