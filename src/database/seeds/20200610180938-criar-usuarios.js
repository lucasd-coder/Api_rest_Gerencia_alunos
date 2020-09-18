const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [
    {
      nome: 'João',
      email: 'joaodasilva@hotmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    }, {
      nome: 'João2',
      email: 'joao2dasilva@hotmail.com',
      password_hash: await bcryptjs.hash('7891011', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: () => {

  },
};
