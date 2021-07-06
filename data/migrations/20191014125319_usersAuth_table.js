
exports.up = function(knex) {
    return knex.schema.createTable("usersAuth", tbl => {
        tbl.increments();
        tbl
          .string("userName", 255)
          .notNullable()
          .unique();
        tbl.string('password', 255).notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("usersAuth");
};
