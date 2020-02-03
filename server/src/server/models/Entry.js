'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Entry', {
        data: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
