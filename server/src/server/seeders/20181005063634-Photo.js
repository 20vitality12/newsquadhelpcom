module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Photos', [{
            userId: 1,
            filename: 'public/images/1574978045213_anonumous-min.png',
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};