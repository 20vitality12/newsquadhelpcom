module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Photos', [{
            userId: 1,
            filename: 'public/images/2019-11-28T14:19:27.372Zanonumous-min.png',
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};