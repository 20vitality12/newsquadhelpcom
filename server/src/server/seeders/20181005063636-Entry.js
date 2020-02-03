module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Entries', [{
            userId: 2,
            contestId: 1,
            statusId: 1,
            data: 'entry',
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            userId: 2,
            contestId: 1,
            statusId: 1,
            data: 'data',
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },
    down: (queryInterface, Sequelize) => {
    },
};