
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('name', 128).notNullable();
        tbl.text('description', 1000);
        tbl.boolean('completed').defaultTo(false).notNullable();
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('name', 128).unique().notNullable();
        tbl.text('description', 1000);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description', 1000).notNullable();
        tbl.text('notes', 1000);
        tbl.boolean('completed').defaultTo(false).notNullable();
        tbl.integer('project_id')
            .unsigned().notNullable()
            .references('id').inTable('projects')
            .onUpdate('restrict').onDelete('restrict');
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
            .unsigned().notNullable()
            .references('id').inTable('projects')
            .onUpdate('restrict').onDelete('restrict');
        tbl.integer('resource_id')
            .unsigned().notNullable()
            .references('id').inTable('resources')
            .onUpdate('restrict').onDelete('restrict');
        tbl.primary(['project_id', 'resource_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
