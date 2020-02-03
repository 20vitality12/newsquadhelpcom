'use strict';

module.exports = (sequelize, DataTypes) => {
    const Contest = sequelize.define('Contest', {
        contestName: {
            type: DataTypes.STRING,
        }
    });
    return Contest;
};
