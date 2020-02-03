module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Contests', [{
            userId: 1,
            entryId: 1,
            statusId: 1,
            contestName: 'CONTEST',
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },
    down: (queryInterface, Sequelize) => {
    },
};