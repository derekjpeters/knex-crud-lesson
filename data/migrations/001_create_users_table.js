exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
      tbl.increments(); // 💬 auto-incrementing primary key column named "id"
      tbl.string('name', 255).notNullable();
      tbl.string('email', 255).unique().notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
  