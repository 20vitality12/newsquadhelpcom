module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('UsersData', [{
            userId: 1,
            interests: 'qwe',
            motivation: 'ewqeqweqweqweqweqwe',
            address: 'qeweewqwq',
            city: 'qwewqeewqe',
            stateOrProvince: 'qweqwwqe',
            pin: 700311,
            country: 'qweqwe',
            phone: '0500750260',
            linkedIn: 'qweqwewq',
            twitter: 'eqweqweqweqwe',
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};