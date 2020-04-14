
exports.up = function(knex) {
  
   return knex.schema.createTable('cars', tbl => {
      tbl.increments(); // Super common, shortcut code. Gives us a primary key called ID that auto++s
      tbl.string('VIN', 255).notNullable().index(); // notNullable = required, index makes search a Lot faster
      tbl.string('Make', 255).notNullable().index();
      tbl.string('Model', 255).notNullable().index();
      tbl.string('Mileage', 255).index();
      tbl.string('Transmission', 255).notNullable();
      tbl.string('Title', 255).defaultTo('No Information.');
   });

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};



