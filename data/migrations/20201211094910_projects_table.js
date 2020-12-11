
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('name', 128).notNullable();
        tbl.text('description', 1000);
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('name', 128).unique().notNullable();
        tbl.text('description', 1000);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
