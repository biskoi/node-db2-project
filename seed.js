exports.seed = function(knex, Promise) {
   return knex('cars').truncate()
   .then(() => {
      return knex('cars').insert([
         {
             "id": 1,
             "VIN": "sampleVin",
             "Make": "someMake",
             "Model": "someModel",
             "Mileage": "25mpg",
             "Transmission": "Manual",
             "Title": "Clean"
         },
         {
             "id": 2,
             "VIN": "sampleVin",
             "Make": "Tesla",
             "Model": "M",
             "Mileage": "a lot",
             "Transmission": "Automatic",
             "Title": "Clean"
         }
     ]);
   });
}