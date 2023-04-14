
exports.up = function(knex) {
  return knex.schema.createTable('todo', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.boolean('completed').notNullable().defaultTo(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('todo');
};
