'use strict';

module.exports = (sequelize, DataTypes) => {
	const Photo = sequelize.define('Photo', {
		filename: {
			type: DataTypes.STRING,
			defaultValue: 'anonumous.png',
			allowNull: false

		}
	});
	Photo.associate = function (models) {
		Photo.belongsTo(models.User, {foreignKey: 'userId'});
	};
	return Photo;
};
