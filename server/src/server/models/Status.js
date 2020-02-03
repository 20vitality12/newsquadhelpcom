'use strict';

module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define('Status', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Status;
};
