
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('levels').del()
    .then(function () {
      // Inserts seed entries
      return knex('levels').insert([
        {id: 1, population_bad: 10, population_good: 10}
      ]);
    });
};
