
exports.seed = function(knex) {
      return knex('users').insert([
        {"username": "austin2", "password": "austin", "firstName": "austin", "lastName": "breaux"},
        {"username": "austin3", "password": "austin", "firstName": "austin", "lastName": "breaux"},
        {"username": "austin4", "password": "austin", "firstName": "austin", "lastName": "breaux"},
        {"username": "austin5", "password": "austin", "firstName": "austin", "lastName": "breaux"},
        {"username": "austin2", "password": "austin", "firstName": "austin", "lastName": "breaux"},
      ]);
};
