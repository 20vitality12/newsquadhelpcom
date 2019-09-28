const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'user',
      lastName: 'user',
      displayName: 'user',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('qwe', bcrypt.genSaltSync(8)),
      role: 'buyer',
      isBanned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
  },
};
