module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Statuses', [{
            name: 'accepted',
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            name: 'pending',
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            name: 'rejected',
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};